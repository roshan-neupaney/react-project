import React from "react";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Navbar from "./Ecommerce/Navbar";
import About from "./Ecommerce/About";
import Home from "./Ecommerce/Home";
import Contact from "./Ecommerce/Contact";
import Signin from "./Ecommerce/Signin";
import Copyright from "./Ecommerce/Home/Copyright";

export default function App(props) {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
        </Routes>
        <Copyright/>
      </Router>
      
    </>
  );
}
