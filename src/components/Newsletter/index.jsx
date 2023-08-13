import React from "react";
import Button from "../Button";
import NewsletterDecor1 from "../../images/Newsletter-decor1.svg"
import NewsletterDecor2 from "../../images/Newsletter-decor2.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Newsletter() {
  return (
    <div className="py-[100px] bg-[#29B067] relative">
      <div className="container">
        <LazyLoadImage
          src={NewsletterDecor1}
          alt=""
          className="absolute left-0 top-[-26%]"
        />
        <LazyLoadImage
          src={NewsletterDecor2}
          alt=""
          className="absolute right-0 "
        />
        <div className="flex flex-col gap-5 items-center text-center">
          <h2 className="text-white font-sans font-[600] text-[4.4rem] w-[500px] ">
            Subscribe newsletter to get updates
          </h2>
          <p className="text-white text-base  w-[470px]">
            Download the Just Eat app for faster ordering and more personalised
            recommendations.
          </p>
        </div>
        <div className="flex gap-12 mt-[38px] items-center justify-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email"
            className=" p-[15px] rounded-[6px] font-[400] w-[410px] h-[60px] border-[1px] border-black"
          />
          <Button ClassNameCustom="bg-[#FFCF54] text-black">Newsletter</Button>
        </div>
      </div>
    </div>
  );
}
