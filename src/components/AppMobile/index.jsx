import React from "react";
import DecorApp from "../../images/App-decor.svg";
import MobileImg from "../../images/MobileApp-img.svg"

export default function AppMobile() {
  return (
    <div className="h-[695px] bg-[#FFCF54] pt-[100px]">
      <div className="container">
        <div className="flex flex-col gap-[18px] items-center text-center relative">
          <h1 className="w-[470px] font-sans text-[4.4rem] font-[600]">
            Find your flavour even faster
          </h1>
          <p className="w-[470px] font-[600] text-base">
            Download the Just Eat app for faster ordering and more personalised
            recommendations.
          </p>
          <img src={DecorApp} alt="" className="absolute top-[50%] z-30" />
          <img src={MobileImg} alt="" className="absolute top-[120%] z-40" />
        </div>
      </div>
    </div>
  );
}
