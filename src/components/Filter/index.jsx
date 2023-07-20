import React from 'react'
import VectorUp from "../../images/Vector-up.svg";
import IconStart from "../../images/Star -icon.svg";

export default function Filter() {
  return (
    <div className="filter w-[23%]">
      <div className="flex gap-[30px] ">
        <p className="font-bold text-3xl text-[#191720]">Filter</p>
        <p className="underline underline-offset-4 pb-1">Clear All</p>
      </div>
      <div className="flex gap-[30px] mt-[30px]">
        <p className="text-3xl font-bold text-[#191720]">Restaurants</p>
        <p className="text-3xl font-bold text-[#191720]">Catering</p>
      </div>
      <div className="flex mt-[30px] mb-[18px]">
        <button class="flex justify-center items-center w-[135px] h-[60px] bg-[#572AF8] rounded-[6px] font-semibold text-16 leading-28 text-white cursor-pointer ">
          Delivery
        </button>
        <button class="flex justify-center items-center w-[135px] h-[60px] bg-white rounded-[6px] font-semibold text-16 leading-28 text-black cursor-pointer border-2 border-[#191720] ml-[2px]">
          Pickup
        </button>
      </div>

      <div className="flex gap-6 justify-start items-center">
        <p className="text-3xl text-[#575363]  ">Deliver my food</p>
        <p className="text-[#572AF8] font-[700] text-[1.8rem]">Today,ASAP</p>
      </div>
      <div className=" mt-[30px] ">
        <div className="flex justify-between mb-[30px]">
          <p className="text-[2rem] font-[700] text-[#191720]">FoodEats</p>
          <img src={VectorUp} alt="" />
        </div>
        <div className="flex gap-[12px]">
          <input type="checkbox" name="" id="" />
          <p>Special Deals</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>Top Eats</p>
        </div>

        <div className="bg-black w-[270px] rounded-[2px] h-[1px] mt-[30px] mb-[30px]"></div>

        <div className="flex justify-between mb-[30px]">
          <p className="text-[2rem] font-[700] text-[#191720]">Price</p>
          <img src={VectorUp} alt="" />
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>$0-$10</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>$10-$20</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>$20-$30</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>$30-$40</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>$40-$50</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>$50-$100</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>$100-$100+</p>
        </div>

        {/* Max details  */}
        <div className="bg-black w-[270px] rounded-[2px] h-[1px] mt-[30px] mb-[30px]"></div>

        <div className="flex justify-between mb-[30px]">
          <p className="text-[2rem] font-[700] text-[#191720]">
            Max Delivery Fee
          </p>
          <img src={VectorUp} alt="" />
        </div>

        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>$0-$2</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>$3-$6</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>$6-$9+</p>
        </div>

        {/* Rating  */}

        <div className="bg-black w-[270px] rounded-[2px] h-[1px] mt-[30px] mb-[30px]"></div>

        <div className="flex justify-between mb-[30px]">
          <p className="text-[2rem] font-[700] text-[#191720]">Rating</p>
          <img src={VectorUp} alt="" />
        </div>

        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>1.0</p>
          <img src={IconStart} alt="" />
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>2.0</p>
          <img src={IconStart} alt="" />
          <img src={IconStart} alt="" />
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>3.0</p>
          <img src={IconStart} alt="" />
          <img src={IconStart} alt="" />
          <img src={IconStart} alt="" />
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>4.0</p>
          <img src={IconStart} alt="" />
          <img src={IconStart} alt="" />
          <img src={IconStart} alt="" />
          <img src={IconStart} alt="" />
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>5.0</p>
          <img src={IconStart} alt="" />
          <img src={IconStart} alt="" />
          <img src={IconStart} alt="" />
          <img src={IconStart} alt="" />
          <img src={IconStart} alt="" />
        </div>

        {/* Delivery Time  */}

        <div className="bg-black w-[270px] rounded-[2px] h-[1px] mt-[30px] mb-[30px]"></div>

        <div className="flex justify-between mb-[30px]">
          <p className="text-[2rem] font-[700] text-[#191720]">Delivery Time</p>
          <img src={VectorUp} alt="" />
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>Anytime</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>15 min</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>30 min</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>45 min</p>
        </div>
        <div className="flex gap-[12px] mt-[16px]">
          <input type="checkbox" name="" id="" />
          <p>60 min</p>
        </div>
      </div>
    </div>
  );
}
