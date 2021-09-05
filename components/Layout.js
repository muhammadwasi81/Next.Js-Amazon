import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazon</title>
      </Head>

      {/*  Navbar section  */}
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Amazon</Typography>
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
