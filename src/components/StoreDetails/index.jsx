import React from 'react'
import HeroImg from "../../images/Restaurant_Details_Img.svg";
import HeroImgSub from "../../images/Restaurant_Details_Img2.svg";
import Star from "../../images/Star -icon.svg";


export default function StoreDetails() {
  return (
    <div className="container">
      <div>
        <div className="flex justify-center items-center flex-col relative">
          <img src={HeroImg} alt="" />
          <img src={HeroImgSub} alt="" className="absolute top-96 z-40" />
        </div>
      </div>
      <div className="flex justify-between mt-[103px]">
        <h2 className="font-sans text-[44px] ">The Burger Cafe</h2>
        <div className="flex justify-evenly items-center w-[120px] h-[36px] rounded-[4px] bg-[#F05E36] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <h2>Store info</h2>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-[20px] mt-[30px]">
          <p>$0 delivery fee</p>
          <h2 className="w-[1px] h-[30px] rounded-[.5px] bg-[#575363]"></h2>
          <p>
            Time: <span className="ml-[10px]">20min</span>
          </p>
          <h2 className="w-[1px] h-[30px] rounded-[.5px] bg-[#575363]"></h2>
          <p>
            Foody type: <span className="ml-[10px]">Burger</span>
          </p>
        </div>
        <div className="w-[159px] h-[36px] rounded-[4px] bg-[#29B067] text-white flex items-center justify-evenly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>

          <p>Add to favorites</p>
        </div>
      </div>

      <div>
        <div className="flex gap-[18px] mt-[18px] items-center">
          <div className="flex items-center gap-[6px]">
            <span>4.6</span>
            <img src={Star} alt="" />
            <p>(2,200)</p>
          </div>
          <h2 className="w-[1px] h-[30px] rounded-[.5px] bg-[#575363]"></h2>
          <p>
            <span className="font-bold">94%</span> Food was good
          </p>
          <h2 className="w-[1px] h-[30px] rounded-[.5px] bg-[#575363]"></h2>
          <p>
            <span className="font-bold">96</span>% Delivery on time
          </p>
          <h2 className="w-[1px] h-[30px] rounded-[.5px] bg-[#575363]"></h2>
          <p>
            <span className="font-bold">90%</span> Order was correct
          </p>
        </div>
      </div>

      <div className="w-[100%] h-[1px] rounded-[.5px] bg-black mt-[30px]"></div>

      <div className="flex gap-[30px] mt-[30px]">
        <p className="font-[600] text-[1.8rem]">Menu</p>
        <p className="font-[600] text-[1.8rem]">About</p>
        <p className="font-[600] text-[1.8rem]">Reviews</p>
      </div>
      <div className="mt-[56px]">
        <h2 className="text-[2.6rem] font-[600] mb-[30px] ">Food Menu</h2>
        <div className="h-[88px] bg-[#FFFAE3] flex justify-center items-center">
          <ul className="flex gap-[30px]">
            <li className="text-grey text-base">Popular Items</li>
            <li className="text-grey text-base">Cheeseburger</li>
            <li className="text-grey text-base">Chicken Burger</li>
            <li className="text-grey text-base">Whataburger</li>
            <li className="text-grey text-base">Fatburger</li>
            <li className="text-grey text-base">Smashburger</li>
            <li className="text-grey text-base">Chili Burger</li>
            <li className="text-grey text-base">Bbq Burger</li>
            <li className="text-grey text-base">Smokin’ Burger</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
