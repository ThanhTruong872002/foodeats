import React, { useContext } from "react";
import Burgur from "../../images/burger.svg";
import Pizza from "../../images/pizza.svg";
import Wings from "../../images/Wings.svg";
import CoffeeTea from "../../images/coffee-tea.svg";
import Indian from "../../images/indian.svg";
import Chinese from "../../images/chinea.svg";
import VietNam from "../../images/vietnam.svg";
import VectorRight from "../../images/Arrow-right.svg";
import VectorDown from "../../images/VectorDown.svg";
import Cards from "../Cards";
import PageNumber from "../PageNumber";
import { LoginContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const { setStatus } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleStoreDetails = () => {
    navigate("/restaurantDetails");
  };

  return (
    <div className="category w-[75%]">
      <div className="flex justify-between items-center">
        <p className="font-bold text-[2rem] text-[#191720] ">
          Explore by category
        </p>
        <a
          href="#"
          className="text-[1.8rem] font-[600] text-[#572AF8] hover:cursor-pointer"
        >
          View All
        </a>
      </div>
      <div
        className="flex gap-[30px] items-center mt-[30px]"
        onClick={handleStoreDetails}
      >
        <div className="text-center">
          <img src={Burgur} alt="" />
          <p className="mt-[6px] text-[1.6rem] font-[600] text-[#191720] w-[64px]">
            Burgur
          </p>
        </div>
        <div className="text-center">
          <img src={Pizza} alt="" />
          <p className="mt-[6px] text-[1.6rem] font-[600] text-[#191720] w-[64px] ">
            Pizza
          </p>
        </div>
        <div className="text-center">
          <img src={VietNam} alt="" className="translate-x-[25%]" />
          <p className="mt-[6px] text-[1.6rem] font-[600] text-[#191720]">
            Sandwiches
          </p>
        </div>
        <div className="text-center">
          <img src={Wings} alt="" />
          <p className="mt-[6px] text-[1.6rem] font-[600] text-[#191720] w-[64px]">
            Wings
          </p>
        </div>
        <div className="text-center mx-auto">
          <img src={CoffeeTea} alt="" className="translate-x-[25%]" />
          <p className="mt-[6px] text-[1.6rem] font-[600] text-[#191720] w-[96px] ">
            Coffee & Tea
          </p>
        </div>
        <div className="">
          <img src={Indian} alt="" />
          <p className="mt-[6px] text-[1.6rem] font-[600] text-[#191720] w-[64px] translate-x-[10%]">
            Indian
          </p>
        </div>
        <div className="text-center">
          <img src={Chinese} alt="" />
          <p className="mt-[6px] text-[1.6rem] font-[600] text-[#191720]">
            Chinese
          </p>
        </div>
        <div className="">
          <img src={VietNam} alt="" className="relative" />
          <p className="mt-[6px] text-[1.6rem] font-[600] text-[#191720] w-[96px]">
            Viet Nam
          </p>
        </div>
        <button>
          <img
            src={VectorRight}
            alt=""
            className="absolute block mt-[-50px] ml-[-70px]"
          />
        </button>
      </div>

      <div className="w-[100%] h-[1px] bg-[#191720] mt-[30px]"></div>

      <div className="flex justify-between mt-[45px]">
        <p className="font-bold text-[#2rem]">
          120 Restaurants Near Austin, TX
        </p>
        <div className="flex gap-[12px] items-center ">
          <p>Sort By:</p>
          <div className="relative inline-block">
            <button className=" flex items-center justify-between p-[15px] w-[169px] h-[60px] bg-white rounded-t-xl font-[600] text-[18px] text-black cursor-pointer border-2 border-black">
              Popular
              <img src={VectorDown} alt="" />
            </button>
            <ul className="absolute left-0 w-[135px]  bg-white rounded-md shadow-lg">
              <li>
                <button
                  href="#"
                  className=" text-left p-[15px] w-[169px] h-[60px] bg-white font-[600]  text-[18px] cursor-pointer border-2 border-black border-t-0 border-b-0"
                >
                  Popular
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className=" text-left p-[15px] w-[169px] h-[60px] bg-white font-[600]  text-[18px] cursor-pointer border-2 border-black"
                >
                  Recommended
                </button>
              </li>
              <li>
                <button
                  href="#"
                  className=" text-left p-[15px] w-[169px] h-[60px] bg-white font-[600]  text-[18px] cursor-pointer border-2 border-black border-t-0 rounded-b-xl"
                >
                  Distance
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Cards />
      <PageNumber />
    </div>
  );
}
