import React, { useContext } from "react";
import Header from "../Header";
import { LoginContext } from "../../App";
import StoreDetails from "../StoreDetails";
import PopularItems from "../PopularItems";
import CustomerReview from "../CustomerReview";
import Footer from "../Footer";

export default function RestaurantDetails() {
  const { openSignIn } = useContext(LoginContext);
  return (
    <div className="h-[5000px]">
      <Header />
      <StoreDetails />
      <PopularItems />
      <CustomerReview />
      <Footer />
    </div>
  );
}
