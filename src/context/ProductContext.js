import React, { useState, useEffect } from 'react'
import { getShoesData } from  '../compoenets/api';

const ProductContext =React.createContext([]);

const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
   // const [loading, setLoading] = useState(true)
    //const [cart, setcart] = useState([])
    useEffect(() => {
        const fetchApi = () => {
          setProducts(getShoesData());
          console.log(products);
        }
    //console.log(dailyData); // 
    fetchApi();
    }, [setProducts]);


return (
    <ProductContext.Provider value={{
      products: products  
    }      
    }>
         {props.children}
    </ProductContext.Provider>
  )
}


export  { ProductContext ,ProductProvider}
