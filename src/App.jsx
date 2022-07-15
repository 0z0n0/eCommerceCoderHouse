import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Cart from './Container/Cart/Cart';
import CartContextProvider from './context/CartContext';
import NavBar from './components/navbar/Navbar';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import * as bootstrap from 'bootstrap';
import './App.css';
import swal from 'sweetalert'
import 'bootstrap-icons/font/bootstrap-icons.css'



function App() {
  return (
    <BrowserRouter> 
     <CartContextProvider>
      <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:id' element={<ItemListContainer/>}/>
            <Route path='/detalle/:detailId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart/>}/>

            <Route path='/*' element={<Navigate to='/'/>}/>
          </Routes>
      </div> 
      </CartContextProvider>   
    </BrowserRouter>
  );
}

export default App;
