import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useRouterElement from "./routes/useRouterElement";
import { BrowserRouter } from "react-router-dom";

export const LoginContext = React.createContext();

function App() {
  const [status, setStatus] = useState("home");
  const [openSignIn, setOpenSignin] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [profile, setProfile] = useState({});
  console.log(authenticated);


  const routerElement = useRouterElement();
  const navigate = useNavigate();

  
  const getDatafromLS = () => {
    const token = localStorage.getItem("token");
    const user_info = localStorage.getItem("user");

    if (user_info) {
      setAuthenticated(true);
      setProfile(JSON.parse(user_info));
    }
  };
  useEffect(() => {
    getDatafromLS();
    if (profile) {
      navigate("/searchResult");
    }
  }, []);
  return (
    <LoginContext.Provider
      value={{
        setStatus,
        setOpenSignin,
        openSignIn,
        authenticated,
        setAuthenticated,
        profile,
        setProfile,
      }}
    >
      {/* <div className={`${openSignIn && "h-[100vh] overflow-hidden"} `}> */}
      {routerElement}
      {/* </div> */}
    </LoginContext.Provider>
  );
}

export default App;
