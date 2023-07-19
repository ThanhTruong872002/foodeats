import React, { useContext } from "react";
import Logo from "../../images/Logo.svg";
import './style.css' 
import Button from "../Button";

export default function Header() {


  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header__inner">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="header__menu">
              <a href="#" className="header__menu-link text-red">
                Get the app
              </a>
              <a href="# " className='header__menu-link'>About</a>
              <a href="#" className="header__menu-link">
                Page
              </a>
            </div>
            <div className="header__action">
              <Button>Sign In</Button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
