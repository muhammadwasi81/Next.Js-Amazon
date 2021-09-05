import React from 'react';
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
} from '@material-ui/core';
import useStyles from '../utils/styles';
import NextLink from 'next/link';

export default function Layout({ title, children, description }) {
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
      type: 'light',

      primary: {
        main: '#f0c000',
      },

      secondary: {
        main: '#208080',
      },
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazon` : 'Next Amazon'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>

      {/*  Navbar section  */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </div>
  );
}
