import React, { useContext, useState } from "react";
import Logo from "../../images/Logo.svg";
import "./style.css";
import Button from "../Button";
import { LoginContext } from "../../App";
import SignIn from "../SignIn";

export default function Header() {
  
  const { setStatus,openSignIn,setOpenSignin } = useContext(LoginContext);

  const handleClick = () => {
    setOpenSignin(true);
  };
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
              <a href="# " className="header__menu-link">
                About
              </a>
              <a href="#" className="header__menu-link">
                Page
              </a>
            </div>
            <div className="header__action" onClick={handleClick}>
              <Button>Sign In</Button>
            </div>
          </div>
        </div>
      </div>
      {openSignIn && <SignIn/>}
    </div>
  );
}
