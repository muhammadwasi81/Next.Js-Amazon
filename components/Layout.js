import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next Amazon</title>
      </Head>

      {/*Navbar section  */}
      <AppBar position="static">
        <Toolbar>
          <Typography>Amazon</Typography>
        </Toolbar>
      </AppBar>
      {/* Main Section */}
      <Container>{children}</Container>

      {/* Footer */}
      <footer>
        <Typography>&copy; All right reserved. Next Amazon.</Typography>
      </footer>
    </div>
  );
}
