import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from "./pages/Products";
import Dashboard from './pages/Dashboard'
import About from "./pages/About";
import Contact from "./pages/Contact/Contact"
import LogIn from "./pages/Login"
import Register from "./pages/Register"

// import Stock from "./pages/Stock/Stock";

const Routes = () => {
    return (
        <Switch>
           <Route path="/"  element={<Home/>}/>
           <Route path="/about"  element={<About/>}/>           
           <Route path="/products" element={<Products />} />
           <Route path="/contact-us" element={<Contact/>}></Route>
           <Route path="/dashboard"  element={<Dashboard/>} />           
           <Route path="/login"  element={<LogIn/>} />
           <Route path="/register"  element={<Register/>} />

         {/* <Route path="/dashboard/stock" element={<Stock />} /> */}
        </Switch>        
    );
}

export default Routes;