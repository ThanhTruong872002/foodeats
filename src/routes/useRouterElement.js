import { useRoutes } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import About from "../components/About";
import Features from "../components/Features";
import AppMobile from "../components/AppMobile";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useContext } from "react";
import { LoginContext } from "../App";
import ProtectedRouter from ".";
import SignIn from "../components/SignIn";
import SearchResult from "../components/SearchResult";
import RestaurantDetails from "../components/RestaurantDetails";

export default function useRouterElement() {
  //   const { openSignIn } = useContext(LoginContext);
  const routerElements = useRoutes([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Hero />
          <Service />
          <About />
          <Features />
          <AppMobile />
          <Testimonial />
          <Newsletter />
          <Footer />
        </>
      ),
    },
    {
      path: "/searchResult",
      element: <ProtectedRouter />,
      children: [
        {
          path: "/searchResult",
          element: <SearchResult />,
        },
      ],
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/restaurantDetails",
      element: <RestaurantDetails />,
    },
  ]);
  return routerElements;
}
