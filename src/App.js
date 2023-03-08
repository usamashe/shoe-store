import logo from './logo.svg';
import './App.css';
import { Home,NavBar,ProductsIndex,Product,ProductDetails,PageNotFound } from './components/Index';
import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import React from 'react';
import shoesData from './picture/data';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home shoesData={shoesData} />}/>
      <Route path="/men" element={<Product category="men" />}>
        <Route path="/men" element={<ProductsIndex shoesData={shoesData} category="men" />} />
        <Route path=":productId" element={<ProductDetails shoesData={shoesData} category="men" />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
   </Routes>
 </React.Fragment>
 
  );
}

export default App;
