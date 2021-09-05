import React from 'react';
import Head from 'next/head';
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import NextLink from 'next/link';

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Next Amazon</title>
      </Head>

      {/*  Navbar section  */}
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              {' '}
              <Typography className={classes.brand}>Amazon</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart</Link>
            </NextLink>

            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      {/* Main Section */}
      <Container className={classes.main}>{children}</Container>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography>&copy; All right reserved. Next Amazon.</Typography>
      </footer>
    </div>
  );
}
