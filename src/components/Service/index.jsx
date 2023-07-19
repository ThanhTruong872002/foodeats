import React from "react";
import ServiceImg1 from "../../images/service_image1.svg";
import ServiceImg2 from "../../images/service_image2.svg";
import ServiceImg3 from "../../images/service_image3.svg";

export default function Service() {
  return (
    <>
      <div className="service mt-40 mb-[160px]">
        <div className="container">
          <div className="service__inner">
            <div className=" flex flex-col justify-center items-center ">
              <h2 className=" text-6xl text-#191720 font-medium w-[470px] font-sans text-center">
                Your everyday, right away
              </h2>
              <div className="text-2xl text-#575363 mt-5 mb-14 w-[470px] text-center ">
                Order food and grocery delivery online from hundreds of
                restaurants and shops nearby.
              </div>
            </div>
            <div className=" flex justify-center items-center gap-[30px]">
              {/* Item1  */}
              <div className=" text-center hover:flex-shrink-0 hover:rounded-[12px] hover:">
                <img src={ServiceImg1} alt="" className="mx-auto block" />
                <h2 className="text-3xl font-medium mt-5 mb-2 text-#191720">
                  Food Items
                </h2>
                <p className="text-3xl font-normal w-[330px] mb-[30px]">
                  Find deals, free delivery, and more from our restaurant
                  partners.
                </p>
                <a href="" className="text-3xl font-medium text-#191720">
                  Explore
                </a>
              </div>
              {/* Item 2  */}
              <div className=" text-center">
                <img src={ServiceImg2} alt="" className="mx-auto block" />
                <h2 className="text-3xl font-medium mt-5 mb-2 text-#191720">
                  Groceries
                </h2>
                <p className="text-3xl font-normal w-[330px] mb-[30px]">
                  Find deals, free delivery, and more from our restaurant
                  partners.
                </p>
                <a href="" className="text-3xl font-medium text-#191720">
                  Explore
                </a>
              </div>
              {/* Item 3  */}
              <div className=" text-center">
                <img src={ServiceImg3} alt="" className="mx-auto block" />
                <h2 className="text-3xl font-medium mt-5 mb-2 text-#191720">
                  Flower Items
                </h2>
                <p className="text-3xl font-normal w-[330px] mb-[30px]">
                  Find deals, free delivery, and more from our restaurant
                  partners.
                </p>
                <a href="" className="text-3xl font-medium text-#191720 ">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
