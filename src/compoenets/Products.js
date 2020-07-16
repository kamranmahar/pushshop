import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Footer from './Footer';
import { Outlet } from 'react-router';

const  image="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(1),
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      alignContent:'center',
      minHeight:400,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 10,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(1),
      marginBottom:10,
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
     
    },
  }));



export default function Products() {
    const classes = useStyles();


   return (
      <React.Fragment>
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={image} alt="" />}
      <div className={classes.overlay} />
      <Grid container justify="center"  alignItems="center" >
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3"  color="inherit" gutterBottom>
            Title of a longer featured blog post
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents
            </Typography>
            <Link variant="subtitle1" href="#">
              reading ..
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>

      <Outlet />
      <Footer></Footer>
      </React.Fragment>
    );
}