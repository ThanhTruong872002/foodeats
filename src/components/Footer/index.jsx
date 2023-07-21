import React from "react";
import Logo from "../../images/Logo.svg";
import Facebook from "../../images/Facebook-Icons.svg";
import Twitter from "../../images/Twiter-icon.svg";
import In from "../../images/In-Icon.svg";
import Instagram from "../../images/Instagram-icon.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-[#FFFAE3] mt-[160px] pt-[100px]">
        <div className=" flex gap-[213px] justify-center">
          <div>
            <img src={Logo} alt="" />
            <p className="w-[270px] text-[16px] font-normal text-[#575363] mt-[12px] mb-[20px]">
              Food, drinks, groceries, and more available for delivery and
              pickup.
            </p>
            <div className="flex gap-[6px]">
              <button className="border-2 w-[36px] h-[36px] rounded-[4px] bg-[#572AF8] text-[#fff] justify-center items-center flex ">
                <a href="https://www.facebook.com/profile.php?id=100012255758419">
                  <img src={Facebook} alt="" />
                </a>
              </button>
              <button className="border-2 w-[36px] h-[36px] rounded-[4px] bg-[#000] text-[#fff] justify-center items-center flex">
                <img src={Instagram} alt="" />
              </button>
              <button className="border-2 w-[36px] h-[36px] rounded-[4px] bg-[#000] text-[#fff] justify-center items-center flex">
                <img src={Twitter} alt="" />
              </button>
              <button className="border-2 w-[36px] h-[36px] rounded-[4px] bg-[#000] text-[#fff] justify-center items-center flex">
                <img src={In} alt="" />
              </button>
            </div>
          </div>
          <div className="flex gap-[87px] ">
            <div>
              <h2 className="font-bold text-[20px] mb-[24px]">Get Started</h2>
              <p className="font-normal text-[#575363]">FoodEats Sign In</p>
              <p className="my-[16px] font-normal text-[#575363]">
                FoodEats Sign Up
              </p>
              <p className="my-[16px] font-normal text-[#575363]">
                Become a Rider
              </p>
              <p className="font-normal text-[#575363]">Become a Partner</p>`
            </div>
            `
            <div>
              <h2 className="font-bold text-[20px] mb-[24px]">Get Help</h2>
              <p className="font-normal text-[#575363]">Resources</p>
              <p className="my-[16px] font-normal text-[#575363]">Support</p>
              <p className="font-normal text-[#575363]">Contact us</p>
            </div>
            <div>
              <h2 className="font-bold text-[20px] mb-[24px]">Company</h2>
              <p className="font-normal text-[#575363]">About Us</p>
              <p className="my-[16px] font-normal text-[#575363]">
                Customer Rights
              </p>
              <p className="my-[16px] font-normal text-[#575363]">Career</p>
              <p className="my-[16px] font-normal text-[#575363]">Press</p>
              <p className="font-normal text-[#575363]">Blog</p>
            </div>
            <div>
              <h2 className="font-bold text-[20px] mb-[24px]">FootEats For</h2>
              <p className=" font-normal text-[#575363]">Enterprise</p>
              <p className="my-[16px] font-normal text-[#575363]">
                For Small Business
              </p>
              <p className="my-[16px] font-normal text-[#575363]">Personal</p>
              <p className=" font-normal text-[#575363]"> Riders</p>
            </div>
          </div>
        </div>
        <div className="w-[86%] h-[1px] bg-black m-auto my-[50px]"></div>
        <div className="flex justify-between w-[86%] m-auto">
          <p>Copyright © 2022 UIHUT all rights reserved.</p>
          <div className="flex gap-[30px] pb-[36px]">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </>
  );
}
