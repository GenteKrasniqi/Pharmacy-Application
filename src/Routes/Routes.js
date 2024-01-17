import React, { useState, useEffect } from "react";
import { Routes as Switch, Route } from "react-router-dom";

import Header from "../components/menu.js";
import Footer from "../components/Footer.js";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import LogIn from "../pages/Login";
import MainDashboard from "../pages/Dashboard.js";
import MessagesManagement from "../pages/MessagesManagement.js";
import SubscriptionsManagement from "../pages/SubscriptionsManagement.js";
import Accordion from "../pages/AccordionManagment.js";
import ProductsManagement from "../pages/ProductsManagement.js";
import ProductDetails from "../pages/ProductDetails";

const Routes = () => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const role = window.localStorage.getItem('Role');
    if (role) {
      setRole(role);
      setIsLoggedin(true);
    }
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        <>
          <Header />
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<LogIn />} />
          </Switch>
          <Footer />
        </>
      ) : role == 1 ? (
        <Switch>
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/dashboard/messages" element={<MessagesManagement />} />
        <Route path="/dashboard/subscriptions" element={<SubscriptionsManagement />} />
        <Route path="/dashboard/accordion" element={<Accordion />} />
        <Route path="/dashboard/products" element={<ProductsManagement />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        </Switch>
      ) : null}
    </>
  );
};

export default Routes;