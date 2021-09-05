const { makeStyles } = require('@material-ui/core');

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },

  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },

  main: {
    minHeight: '80vh',
  },

  error: {
    marginTop: '2rem',
  },

  footer: {
    marginTop: 10,
    textAlign: 'center',
  },

  section: {
    marginTop: 80,
    marginBottom: 10,
  },
});

export default useStyles;
