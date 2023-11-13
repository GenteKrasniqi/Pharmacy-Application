import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/menu'
// import Slider from './components/Slider';
import Home from './pages/Home';
// import Shop from './Shop';
// import Product from './Product';
// import Cart from './Cart';
// import Login from './Login';
// import Register from './Register';
// import Dashboard from './Dashboard';
// import Footer from './Footer';


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
        {/* <Route path="/product/:id" element={<Product />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
      {/* <Slider /> */}

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
