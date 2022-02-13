/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout'
import db from '../utils/db'
import axios from 'axios'
import NextLink from 'next/link'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Store } from '../utils/Store'
import ProductItem from '../components/ProductItem'
import { Grid, Link, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import useStyles from '../utils/styles'
import Product from '../models/Product'

export default function Home(props) {
  const classes = useStyles()
  const { state, dispatch } = useContext(Store)
  const router = useRouter()
  const { topRatedProducts, featuredProducts } = props

  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/products/${product._id}`)
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock')
      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
    router.push('/cart')
  }

  return (
    <Layout>
      <Carousel className={classes.mt1} animation="slide">
        {featuredProducts.map((product) => (
          <NextLink
            key={product._id}
            href={`/product/${product.slug}`}
            passHref
          >
            <Link>
              <img
                // src={product.featuredImage}
                src="/images/banner1.jpg"
                alt={product.name}
                className={classes.featuredImage}
              />
            </Link>
          </NextLink>
        ))}
      </Carousel>
      <Typography variant="h2">Popular Products</Typography>
      <Grid container spacing={3}>
        {topRatedProducts.map((product) => (
          <Grid item md={4} sm={6} key={product.name}>
            <ProductItem
              product={product}
              addToCartHandler={addToCartHandler}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}

export async function getServerSideProps() {
  await db.connect()
  const featuredProductsDocs = await Product.find(
    { isFeatured: true },
    '-reviews'
  )
    .lean()
    .limit(3)
  const topRatedProductsDocs = await Product.find({}, '-reviews')
    .lean()
    .sort({
      rating: -1,
    })
    .limit(6)
  await db.disconnect()
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
    },
  }
}
