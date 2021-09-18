import React, { useContext } from 'react';
import Head from 'next/head';
import {
  AppBar,
  Container,
  createTheme,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
  CssBaseline,
  Switch,
  Badge,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import Cookies from 'js-cookie';
import { Store } from '../utils/Store';

export default function Layout({ title, children, description }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },

      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },

      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',

      primary: {
        main: '#f0c000',
      },

      secondary: {
        main: '#208080',
      },
    },
  });

  const classes = useStyles();

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkValue = !darkMode;
    Cookies.set('darkMode', newDarkValue ? 'ON' : 'OFF');
  };

  return (
    <>
      <Head>
        <title>{title ? `${title} - Next Amazon` : 'Next Amazon'}</title>
        {description && <meta name="description" content={description}></meta>}
        <link
          rel="icon"
          sizes="32x32"
          href="https://www.nicepng.com/png/detail/139-1392414_shopping-cart-ecommerce-shop-buy-store-checkout-svg.png"
        />
      </Head>

      {/*  Navbar section  */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                {' '}
                <Typography className={classes.brand}>Amazon</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart.cartItems.length}
                    >
                      Cart
                    </Badge>
                  ) : (
                    'Cart'
                  )}
                </Link>
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
      </ThemeProvider>
    </>
  );
}
