import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Image from 'next/image';
import { Alert } from '@material-ui/lab';
import useStyles from '../../utils/styles';
import {
  Button,
  Card,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import Layout from '../../components/Layout';
import NextLink from 'next/link';

export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);

  if (!product) {
    return (
      <Container>
        <Alert className={classes.error} severity="error">
          Product Not Found
        </Alert>
      </Container>
    );
  }

  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>back to products</Typography>
          </Link>
        </NextLink>
      </div>

      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={450}
            layout="responsive"
          ></Image>
        </Grid>

        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>

            <ListItem>
              <Typography>Category: {product.category}</Typography>{' '}
            </ListItem>

            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>

            <ListItem>
              <Typography>
                Rating: {product.rating} stars ({product.numReviews}reviews)
              </Typography>
            </ListItem>

            <ListItem>
              <Typography> Description: {product.description} </Typography>
            </ListItem>
          </List>
        </Grid>

        <Grid item md={3} xs={12}>
          <Card>
            <ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <Typography> Price </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography>$ {product.price} </Typography>
                </Grid>
              </Grid>
            </ListItem>

            <ListItem>
              <Grid container>
                <Grid item xs={6}>
                  <Typography> Status </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography>
                    {product.countInStock > 0 ? 'In stock' : 'Unavailable'}{' '}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>

            <ListItem>
              <Button fullWidth variant="contained" color="primary">
                Add to Cart
              </Button>
            </ListItem>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
