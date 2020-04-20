import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import DefaultPage from "./pages/DefaultPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SPPage from "./pages/SingleProductPage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

class App extends Component{
  render(){
  return (
    <>
      {/* Navbar, Sidebar, Cart, Footer */}
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/products/:id" component={SPPage} />
        <Route path="/cart" component={CartPage} />
        <Route component={DefaultPage}/>
      </Switch>
      <Footer />
    </>
  );
  }
}

export default App;
