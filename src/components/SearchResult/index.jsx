import React, { useContext } from "react";
import Header from "../Header";
import VectorUp from "../../images/Vector-up.svg";
import IconStart from "../../images/Star -icon.svg";
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

export default function SearchResult() {
  return (
    <div className="h-[3000px]">
      <div>
        <Header />
      </div>
      <div className="search mt-[55px]">
        <div className="container">
          <div className="flex gap-[36px]">
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
                <p className="text-[#572AF8] font-[700] text-[1.8rem]">
                  Today,ASAP
                </p>
              </div>
              <div className=" mt-[30px] ">
                <div className="flex justify-between mb-[30px]">
                  <p className="text-[2rem] font-[700] text-[#191720]">
                    FoodEats
                  </p>
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
                  <p className="text-[2rem] font-[700] text-[#191720]">
                    Rating
                  </p>
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
                  <p className="text-[2rem] font-[700] text-[#191720]">
                    Delivery Time
                  </p>
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
              <div className="flex gap-[30px] items-center mt-[30px]">
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
              <Cards/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
