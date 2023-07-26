import React from "react";
import DownloadApp from "../../images/Dowload-App.svg";
import Star from "../../images/Star -icon.svg";
import Union from "../../images/Union.svg";

export default function Testimonial() {
  return (
    <div className="bg-[#FFFAE3] pt-[430px] pb-[160px]">
      <div className="container">
        <img src={DownloadApp} alt="" className="block mx-auto mb-[160px]" />
        <div>
          <h2 className="w-[470px] font-sans text-[4.4rem] mb-[70px]">
            What food lovers are saying about us
          </h2>
          <div className="flex gap-12">
            <div className="bg-white w-[370px] rounded-[12px] px-[20px] py-[30px]">
              <img src={Union} alt="" className="mt-[-50px]" />
              <div className="flex gap-[5px] my-12">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p className="w-[330px]">
                I’m obsessed with excellent customer service...thanks foodeats
                for being awesome!
              </p>
              <div className="w-[330px] h-[1px] rounded-[4px] bg-[#572AF8] my-[20px]"></div>
              <h2 className="text-[20px] font-[600] ">Peter Moor</h2>
              <p className="font-[400] text-[1.4rem]">UI/UX Designer</p>
            </div>
            <div className="bg-white w-[370px] rounded-[12px] px-[20px] py-[30px]">
              <img src={Union} alt="" className="mt-[-50px]" />
              <div className="flex gap-[5px] my-12">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p className="w-[330px]">
                I’m obsessed with excellent customer service...thanks foodeats
                for being awesome!
              </p>
              <div className="w-[330px] h-[1px] rounded-[4px] bg-[#572AF8] my-[20px]"></div>
              <h2 className="text-[20px] font-[600] ">Peter Moor</h2>
              <p className="font-[400] text-[1.4rem]">UI/UX Designer</p>
            </div>
            <div className="bg-white w-[370px] rounded-[12px] px-[20px] py-[30px]">
              <img src={Union} alt="" className="mt-[-50px]" />
              <div className="flex gap-[5px] my-12">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p className="w-[330px]">
                I’m obsessed with excellent customer service...thanks foodeats
                for being awesome!
              </p>
              <div className="w-[330px] h-[1px] rounded-[4px] bg-[#572AF8] my-[20px]"></div>
              <h2 className="text-[20px] font-[600] ">Peter Moor</h2>
              <p className="font-[400] text-[1.4rem]">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
