import { makeStyles } from '@mui/styles'
import { theme } from '../utils/theme'
import { alpha } from '@mui/material/styles'

export default makeStyles({
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
    color: '#f04040',
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
  fullWidth: {
    width: '100%',
  },
  reviewForm: {
    maxWidth: '100%',
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: {
    padding: theme.spacing(0),
  },
  mt1: {
    marginTop: theme.spacing(2),
  },
  // search
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  searchForm: {
    border: `1px solid `,
    // backgroundColor: '#ffffff',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchInput: {
    // paddingLeft: theme.spacing(2),
    // color: '#000000',
    // '& ::placeholder': {
    //   color: '#606060',
    // },color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      color: '#ffffff',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  },
  iconButton: {
    backgroundColor: '#f8c040',
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    '& span': {
      color: '#000000',
    },
  },
  sort: {
    marginRight: theme.spacing(2),
  },
  featuredImage: {
    minHeight: '100%',
    minWidth: '100%',
  },
})
