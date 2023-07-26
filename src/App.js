import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import SearchResult from "./components/SearchResult";
import RestaurantDetails from "./components/RestaurantDetails";
import About from "./components/About";
import Features from "./components/Features";
import AppMobile from "./components/AppMobile";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export const LoginContext = React.createContext();

function App() {
  const [status, setStatus] = useState("home");
  const [openSignIn, setOpenSignin] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [profile, setProfile] = useState({});

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
      <>
        {status === "home" && (
          <>
            <div className={`${openSignIn && "h-[100vh] overflow-hidden"} `}>
              <Header />
              <Hero />
              <Service />
              <About />
              <Features />
              <AppMobile />
              <Testimonial />
              <Newsletter />
              <Footer />
            </div>
          </>
        )}
        {status === "searchResult" && <SearchResult />}
        {status === "RestaurantDetails" && <RestaurantDetails />}
      </>
    </LoginContext.Provider>
  );
}

export default App;
