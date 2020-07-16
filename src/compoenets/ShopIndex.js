import React , { useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { Link} from 'react-router-dom';

import { Card, CardActionArea, CardMedia, CardContent, Button, CardActions } from '@material-ui/core';
import { ProductContext } from  '../context/ProductContext';

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
    root: {
      maxWidth: 300,
      minWidth: 300,
      margin: theme.spacing(1),
    },
    Conatiner : {
       padding: theme.spacing(3),
      spacing:theme.spacing(3),
    },
    media: {
      height: 240,
    },
  }));


export default function ShopIndex(props) {
  const productContex =useContext(ProductContext);
  console.log(productContex);
  const { products } = productContex

    const classes = useStyles();
    /*
    const [products,setProducts]= useState([]);

        useEffect(() => {
            const fetchApi = () => {
              setProducts(getShoesData());
            }
        //console.log(dailyData); // 
        fetchApi();
        }, [setProducts]);
       // slug,name,img,desc
       */
        return (
          <div class="Conatiner">
       


<Grid container className={classes.Conatiner}>
      
      { 
       
          products.map((item) =>    
         
          <Card className={classes.root} key={item.slug}>
            <CardActionArea>
           
              <CardMedia
                className={classes.media}
                component="img"
                image= {item.img}
                title= {item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                <Link to={`/Products/${item.slug}`}>
                {item.name}
                </Link>
                </Typography>
                
              </CardContent>
            
            </CardActionArea>
            <CardActions>
            <Link to={`/Products/${ item.slug}`}>Read More</Link>
          
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions> 
          </Card>     
                    )}
                    </Grid>
        
          </div>
          
        ); 
}
