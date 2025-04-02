import React from 'react';
import Dashboard from './Components/Dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import VendorDetails from './Components/VendorDetails';
import UserDetails from './Components/UserDetails';
import CustomerDetails from './Components/CustomerDetails';
import ProductDetails from './Components/ProductDetails';


function App() {
  return (
    // 
    <>
    <BrowserRouter>
    <Routes>
      <Route  index element={<Dashboard/>}/>
      <Route  path="/vendors" element={<VendorDetails/>}/>
      <Route  path="/userdetails" element={<UserDetails/>}/>
      <Route  path="/vendors" element={<VendorDetails/>}/>
      <Route  path="/customerdetails" element={<CustomerDetails/>}/>
      <Route  path="/productdetails" element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
   
    
    </>
  );
}

export default App;
