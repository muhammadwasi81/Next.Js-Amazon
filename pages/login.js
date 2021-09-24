import React from 'react';
import {
  Button,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from '@material-ui/core';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';

export default function Login() {
  const classes = useStyles();

  return (
    <Layout title="Login">
      <form className={classes.form}>
        <Typography component="h1" variant="h2">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              inputProps={{ type: 'email' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              inputProps={{ type: 'password' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" color="primary" fullWidth>
              Login
            </Button>
          </ListItem>
          &nbsp; &nbsp; Dont have an account? &nbsp;
          <NextLink href="/register" passHref>
            <Link>Register</Link>
          </NextLink>
        </List>
      </form>
    </Layout>
  );
}
