import React , {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Footer from './Footer';
import { getShoesData } from  './api';
import { Outlet } from 'react-router';
import Product from './Product';
import { Card } from '@material-ui/core';


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


export default function ShopIndex() {
    const classes = useStyles();
    const [products,setProducts]= useState([]);

        useEffect(() => {
            const fetchApi = () => {
              setProducts(getShoesData());
            }
        //console.log(dailyData); // 
        fetchApi();
        }, [setProducts]);
       // slug,name,img,desc
        return (
          <div>
         
      
        { 
            products.map((item) =>    
            <Card className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
                {item.name}
            </Typography>  
            </Card>     
                      )}
          
            </div>
          
        ); 
}
