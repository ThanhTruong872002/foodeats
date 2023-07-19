import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Service from "./components/Service";
import SearchResult from "./components/SearchResult";

export const LoginContext = React.createContext();

function App() {
  const [status, setStatus] = useState("home");

  return (
    <LoginContext.Provider value={{ setStatus }}>
      <>
        {status === "home" && (
          <div>
            <Header />
            <Hero />
            <Service/>
          </div>
        )}
        {status === "login" && <Login />}
        {status === "searchResult" && <SearchResult/>}
        {/* <SearchResult/> */}
      </>
    </LoginContext.Provider>
  );
}

export default App;
