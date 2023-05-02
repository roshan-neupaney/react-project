import { useState } from 'react';
import React from "react";
import { Link } from 'react-router-dom';
import Shop_copy from './images/Shop_copy.png'

export default function Navbar(props) {
  const [height, setHeight] = useState('my-navbar nav-height-resp');
  const [visibility, setVisibility] = useState('my-nav visibility-resp my-nav-resp');

  const handleClick = ()=>{
    
    if(height==='my-navbar nav-height-resp' || visibility==='my-nav visibility-resp my-nav-resp'){
    setHeight('my-navbar my-navbar-resp');
    setVisibility('my-nav my-nav-resp');
    }
    else{
      setHeight('my-navbar nav-height-resp');
      setVisibility('my-nav visibility-resp');
    }
   
  }

  return (
  <>
   <nav className={height}>
  <div className="nav-container nav-container-resp">
    <div className="imagebox">
    <Link className="navbar-logo" to="/"><img className="nav-logo" src={Shop_copy}  alt="..." /></Link>
    </div>
    <div className={visibility} id="navbarNav">
      <ul className="navbar-nav navbar-nav-resp">
        <li className="nav-item nav-item-resp">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item nav-item-resp">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item nav-item-resp">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item nav-item-resp">
          <Link className="nav-link" to="/signIn">Sign In <i className="fa-solid fa-arrow-right-to-bracket"></i></Link>
        
        </li>
      </ul>

    </div>
  </div>
  <div className="burger burger-resp" onClick={handleClick}>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
</nav>
  </>
  );
}

