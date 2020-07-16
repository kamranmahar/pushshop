import React , {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import Grid from '@material-ui/core/Grid';
import { getShoesData } from  './api';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
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
      maxWidth: 500,
      minWidth: 500,
      margin: theme.spacing(1),
    },
    Conatiner : {
        margin: theme.spacing(3),
    },
    item : {
        margin: theme.spacing(),
    },
    media: {
      height: 240,
    },

 
      gridList: {
        width: 500,
        height: 450,
      },
      gridListTile: {
        width: 300,
        height: 350,
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
  }));


export default function ProductDetails() {
    const classes=useStyles();
    const {slug}=useParams();
    const [products,setProducts]= useState([]);

    useEffect(() => {
        const fetchApi = () => {
          setProducts(getShoesData());
        }
    //console.log(dailyData); // 
    fetchApi();
    }, [setProducts]);
   // console.log(products);
    let shoe = products.find(obj => obj.slug == slug);
  //  console.log(shoe);
    if(!shoe)
    {return (
        <div>{slug}</div>
        ); }

    //const [name,img,desc]=shoe;

    const tileData = [
         {
           img: shoe.img,
           title: shoe.name,
          
           },
           {
            img: shoe.img,
            title: shoe.name,
           
            },
        ];

    return (
    <Grid container xs={12}  className={classes.container} spacing={2}>
        <Grid item xs={8}>
        <GridList cellHeight={380} >
        {tileData.map((tile) => (
        <GridListTile key={shoe.slug}   className={classes.gridListTile}>
            <img src={shoe.img} alt={shoe.name} />
                <GridListTileBar
                    title={shoe.name}
                    
                    actionIcon={
                        <IconButton aria-label={`info about ${shoe.name}`} className={classes.icon}>
                        
                        </IconButton>
                    }
                    />
                    </GridListTile>
                    ))}
               </GridList>
        </Grid>
        <Grid item xs={4} >
        <Typography gutterBottom variant="h5" component="h5">
        {shoe.name}
                </Typography>
                <Typography gutterBottom variant="h5" color="inherit" paragraph >
        {shoe.desc}
                </Typography>
            
        </Grid>
    </Grid>
        
    );
    
}
