import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import { Alert } from '@material-ui/lab';
import useStyles from '../../utils/styles';
import { Container } from '@material-ui/core';

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
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
