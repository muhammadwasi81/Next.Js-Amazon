import Layout from '../components/Layout'
import db from '../utils/db'
import product from '../models/Product'
import axios from 'axios'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Store } from '../utils/Store'
import ProductItem from '../components/ProductItem'
import { Grid } from '@mui/material'

export default function Home(props) {
  const { products } = props
  const router = useRouter()
  const { state, dispatch } = useContext(Store)

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
      <h1>Products</h1>
      <div>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} sm={6} key={product.name}>
              <ProductItem
                product={product}
                addToCartHandler={addToCartHandler}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  await db.connect()
  const products = await product.find({}, '-reviews').lean()
  await db.disconnect()
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  }
}
