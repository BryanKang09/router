import logo from './logo.svg';
import './App.css';
import Aboutpage from './page/about';
import Homepage from './page/homepage';
import { Routes, Route, Navigate } from "react-router-dom";
import ProductPage from './page/productpage';
import ProductDetailPage from './page/productdetailpage';
import LoginPage from './page/LoginPage';
import { useState } from 'react';
import UserPage from './page/UserPage';



function App() {
  const [authenticate,setAuthenticate] = useState(false)
  const PrivateRoute = ()=>{
    return authenticate == true?<UserPage/>:<Navigate to='/login'/>

  }
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/about' element={<Aboutpage/>}></Route>
        <Route path='/products' element={<ProductPage/>}></Route>
        <Route path='/products/:id' element={<ProductDetailPage/>}></Route>

        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/user' element={<PrivateRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
