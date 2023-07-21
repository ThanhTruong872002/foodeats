import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import checkLogin from "./CheckLogin";
import { LoginContext } from "../../App";

export default function Login() {
  const [formData, setFormDate] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
    confirm_password:""
  });

  const { setStatus } = useContext(LoginContext);
  const {setIsLogin} = useContext(LoginContext)


  const [checkAccount, setCheckAccount] = useState(true);
  const handleChangeUser = (event) => {
    // setErrorMessage("");
    const { name, value } = event.target;
    setFormDate((prev) => ({ ...prev, [name]: value }));
  };
 

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!checkAccount) {
      if (!isUserNameValid(formData.username)) {
        setErrorMessage((prev) => ({ ...prev, username: "Invalid username" }));
        return
      }
      if (!isPasswordValid(formData.password)) {
        setErrorMessage((prev) => ({ ...prev, password: "Invalid password" }));
        return
      }
      if((formData.password !== formData.confirm_password)) {
        setErrorMessage((prev) => ({ ...prev, confirm_password: "Password not match" }));
        return
      }
      const res = await axios.post(
        "https://6486a69cbeba6297278f00b8.mockapi.io/login",
        formData
      );
    } else {
      const res = await checkLogin(formData.username, formData.password);
      if(res.status === true) {
        setStatus("searchResult");
        setIsLogin(true);
      }
      if (res.status === false) {
        setErrorMessage(res.message);
      }
      console.log(res);
    }
  };

  const onCLickCreateAccount = (e) => {
    e.preventDefault();
    setCheckAccount(!checkAccount);
    setErrorMessage("")
  };

  const isUserNameValid = (username) => {
   return /^[a-z0-9_-]+$/i.test(username);
  };

  const isPasswordValid = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/~`])[\w!@#$%^&*()_+\-=[\]{}|\\:;"'<>,.?/~`]{8,}$/.test(
      password
    );
  };

  return (
    <div className="login">
      <form autoSave={false} className="login-form" onSubmit={onSubmit}>
        <input
          value={formData.username}
          type="text"
          name="username"
          className="user_name"
          placeholder="username"
          onChange={handleChangeUser}
        />
        <p className="error_message" style={{ color: "red" }}>
          {errorMessage.username}
        </p>
        <input
          value={formData.password}
          type="password"
          name="password"
          className="password"
          placeholder="password"
          onChange={handleChangeUser}
        />
        <p className="error_message" style={{ color: "red" }}>
          {errorMessage.password}
        </p>

        {!checkAccount && (
          < >
            <input
              value={formData.confirm_password}
              type="password"
              name="confirm_password"
              className="confirm_password"
              placeholder="confirm_password"
              onChange={handleChangeUser}
            />
            <p className="error_message" style={{ color: "red" }}>
            {errorMessage.confirm_password}
          </p>
          </>
        )}

        <button
          type="summit"
          className="btn-login"
          style={{ cursor: "pointer" }}
          // onClick={handleCreateAccount}
        >
          {" "}
          {!checkAccount ? "CREATE ACCOUNT" : "LOGIN"}
        </button>

        <span className="login-contact">
          {" "}
          {!checkAccount ? "Login with account - " : "Not register - "}
          <a href="" className="create-account" onClick={onCLickCreateAccount}>
            {!checkAccount ? "Login" : "Register"}
          </a>
        </span>
      </form>
    </div>
  );
}
