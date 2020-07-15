import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ShopIndex from './ShopIndex';
const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    flexShrink: 0,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent:"center",
    overflowX: 'auto',
    alignContent:'center',
    flex: 1,
  },
  toolbarTitleSecond: {
    fontWeight:"bold",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration:'none',
    color:'black',
  },
  toolbarbutton: {
    padding: theme.spacing(1),
    flexShrink: 0,
    flex: 1,
  },
}));


export default function Header() {
  const classes = useStyles();
 

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Global
        </Typography>
        <IconButton>
        
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar className={classes.toolbar}>
      <Link className={classes.toolbarLink} to="/" >
        <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
          // className={classes.toolbarTitle}
          >
            Global
          </Typography>
        </Link>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <Link className={classes.toolbarLink} to="/" >Men</Link>
          <Link className={classes.toolbarLink} to="/Products" >Women</Link>
          <Link className={classes.toolbarLink} to="/" >Kids</Link>
        
      </Toolbar>
      <Toolbar className={classes.toolbar}>
          <Button variant="outlined" size="small" >
              Sign up
            </Button>
        </Toolbar>
        </Toolbar>
        <Routes>
     <Route path="/" element={<Home />} ></Route>
     <Route path="/Products" element={<Products /> } > 
        <Route path="/" element={<ShopIndex />} ></Route>
     </Route>
   </Routes>
      
    </React.Fragment>
     
  );
}
