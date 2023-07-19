import React, { useContext, useState } from "react";
import "./style.css";
import Login from "../Login";
import { LoginContext } from "../../App";

export default function Button({ children }) {
  const { setStatus } = useContext(LoginContext);

  const handleClickSignIn = () => {
    setStatus("login");
  };
  return (
    <div>
      <a className="btn" onClick={handleClickSignIn}>
        {children}
      </a>
    </div>
  );
}
