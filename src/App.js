import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Header from './compoenets/Header';
import { ProductProvider } from './context/ProductContext';


function App() {
  return (
  <Router>
    <ProductProvider>
    <Header></Header>
    </ProductProvider>
  
   </Router>
  );
}

export default App;


