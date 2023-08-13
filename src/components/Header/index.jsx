import React, { useContext, useState } from "react";
import Logo from "../../images/Logo.svg";
import "./style.css";
import Button from "../Button";
import { LoginContext } from "../../App";
import SignIn from "../SignIn";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { setStatus, openSignIn, setOpenSignin, authenticated, profile } =
    useContext(LoginContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header__inner">
            <div className="logo" onClick={handleBackHome}>
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
            <div className="flex gap-3">
              <div className="header__action">
                {!authenticated ? (
                  <Button onClick={handleClick}>Sign In</Button>
                ) : (
                  <p className="font-[700] uppercase ">
                    {profile.firstname + "  " + profile.lastname}
                  </p>
                )}
              </div>
              {authenticated && (
                <div>
                  <Button classNameCustom="w-[41px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {openSignIn && <SignIn />}
    </div>
  );
}
