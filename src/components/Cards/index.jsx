import React from "react";
import Item1 from "../../images/Cards-img1.svg";
import Item2 from "../../images/Cards-img2.svg";
import Item3 from "../../images/Cards-img3.svg";
import Item4 from "../../images/Cards-img4.svg";
import Item5 from "../../images/Cards-img5.svg";
import Item6 from "../../images/Cards-img6.svg";
import Item7 from "../../images/Cards-img7.svg";
import Item8 from "../../images/Cards-img8.svg";
import Item9 from "../../images/Cards-img9.svg";
import Item10 from "../../images/Cards-img10.svg";
import Item11 from "../../images/Cards-img11.svg";
import Item12 from "../../images/Cards-img12.svg";
import Star from "../../images/Star -icon.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Cards() {
  return (
    <div>
      <div className="grid grid-cols-3 grip gap-x-[30px] gap-y-[42px] ">
        {/* Item 1 */}
        <div>
          <LazyLoadImage src={Item1} alt="" />
          <h2 className="font-bold text-[2rem] mt-[12px] mb-2">
            The Burger Cafe
          </h2>
          <p className="font-normal text-[1.6rem] text-[#575363]">
            $0 delivery fee
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3 ">
            Time:{" "}
            <span className="font-[600] text-black ml-[160px] ">20 min</span>
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3">
            Food Type:{" "}
            <span className="font-[600] text-black ml-[125px] ">Burger</span>
          </p>
          <div className="flex gap-[6px]">
            <p className="text-[14px] text-[#575363] font-normal">4.6</p>
            <LazyLoadImage src={Star} alt="" />
            <p className="text-[14px] text-[#575363] font-normal">(2,200)</p>
          </div>
        </div>
        {/* Item 2  */}
        <div>
          <LazyLoadImage src={Item2} alt="" />
          <h2 className="font-bold text-[2rem] mt-[12px] mb-2">
            The Pizza Hut
          </h2>
          <p className="font-normal text-[1.6rem] text-[#575363]">
            $0 delivery fee
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3 ">
            Time:{" "}
            <span className="font-[600] text-black ml-[160px] ">20 min</span>
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3">
            Food Type:{" "}
            <span className="font-[600] text-black ml-[125px] ">Pizza</span>
          </p>
          <div className="flex gap-[6px]">
            <p className="text-[14px] text-[#575363] font-normal">4.6</p>
            <LazyLoadImage src={Star} alt="" />
            <p className="text-[14px] text-[#575363] font-normal">(2,200)</p>
          </div>
        </div>
        {/* Item 3  */}
        <div>
          <LazyLoadImage src={Item3} alt="" />
          <h2 className="font-bold text-[2rem] mt-[12px] mb-2">
            Caprese Sandwich Hub
          </h2>
          <p className="font-normal text-[1.6rem] text-[#575363]">
            $0 delivery fee
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3 ">
            Time:{" "}
            <span className="font-[600] text-black ml-[160px] ">20 min</span>
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3">
            Food Type:{" "}
            <span className="font-[600] text-black ml-[125px] ">Fast Food</span>
          </p>
          <div className="flex gap-[6px]">
            <p className="text-[14px] text-[#575363] font-normal">4.6</p>
            <LazyLoadImage src={Star} alt="" />
            <p className="text-[14px] text-[#575363] font-normal">(2,200)</p>
          </div>
        </div>
        {/* Item 4  */}
        <div>
          <LazyLoadImage src={Item4} alt="" />
          <h2 className="font-bold text-[2rem] mt-[12px] mb-2">
            The Wings Cafe
          </h2>
          <p className="font-normal text-[1.6rem] text-[#575363]">
            $0 delivery fee
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3 ">
            Time:{" "}
            <span className="font-[600] text-black ml-[160px] ">20 min</span>
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3">
            Food Type:{" "}
            <span className="font-[600] text-black ml-[125px] ">Fast Food</span>
          </p>
          <div className="flex gap-[6px]">
            <p className="text-[14px] text-[#575363] font-normal">4.6</p>
            <LazyLoadImage src={Star} alt="" />
            <p className="text-[14px] text-[#575363] font-normal">(2,200)</p>
          </div>
        </div>
        {/* Item 5  */}
        <div>
          <LazyLoadImage src={Item5} alt="" />
          <h2 className="font-bold text-[2rem] mt-[12px] mb-2">
            The Coffee Express
          </h2>
          <p className="font-normal text-[1.6rem] text-[#575363]">
            $0 delivery fee
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3 ">
            Time:{" "}
            <span className="font-[600] text-black ml-[160px] ">20 min</span>
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3">
            Food Type:{" "}
            <span className="font-[600] text-black ml-[125px] ">
              Coffee & Tea
            </span>
          </p>
          <div className="flex gap-[6px]">
            <p className="text-[14px] text-[#575363] font-normal">4.6</p>
            <LazyLoadImage src={Star} alt="" />
            <p className="text-[14px] text-[#575363] font-normal">(2,200)</p>
          </div>
        </div>
        {/* Item 6  */}
        <div>
          <LazyLoadImage src={Item6} alt="" />
          <h2 className="font-bold text-[2rem] mt-[12px] mb-2">
            The Biryani House
          </h2>
          <p className="font-normal text-[1.6rem] text-[#575363]">
            $0 delivery fee
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3 ">
            Time:{" "}
            <span className="font-[600] text-black ml-[160px] ">20 min</span>
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3">
            Food Type:{" "}
            <span className="font-[600] text-black ml-[125px] ">Dish</span>
          </p>
          <div className="flex gap-[6px]">
            <p className="text-[14px] text-[#575363] font-normal">4.6</p>
            <LazyLoadImage src={Star} alt="" />
            <p className="text-[14px] text-[#575363] font-normal">(2,200)</p>
          </div>
        </div>
        {/* Item 7  */}
        <div>
          <LazyLoadImage src={Item7} alt="" />
          <h2 className="font-bold text-[2rem] mt-[12px] mb-2">
            Fast Food Hub
          </h2>
          <p className="font-normal text-[1.6rem] text-[#575363]">
            $0 delivery fee
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3 ">
            Time:{" "}
            <span className="font-[600] text-black ml-[160px] ">20 min</span>
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3">
            Food Type:{" "}
            <span className="font-[600] text-black ml-[125px] ">Fast Food</span>
          </p>
          <div className="flex gap-[6px]">
            <p className="text-[14px] text-[#575363] font-normal">4.6</p>
            <LazyLoadImage src={Star} alt="" />
            <p className="text-[14px] text-[#575363] font-normal">(2,200)</p>
          </div>
        </div>
        {/* Item 8  */}
        <div>
          <LazyLoadImage src={Item8} alt="" />
          <h2 className="font-bold text-[2rem] mt-[12px] mb-2">
            Fast Food Cafe
          </h2>
          <p className="font-normal text-[1.6rem] text-[#575363]">
            $0 delivery fee
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3 ">
            Time:{" "}
            <span className="font-[600] text-black ml-[160px] ">20 min</span>
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3">
            Food Type:{" "}
            <span className="font-[600] text-black ml-[125px] ">Fast Food</span>
          </p>
          <div className="flex gap-[6px]">
            <p className="text-[14px] text-[#575363] font-normal">4.6</p>
            <LazyLoadImage src={Star} alt="" />
            <p className="text-[14px] text-[#575363] font-normal">(2,200)</p>
          </div>
        </div>
        {/* Item 9  */}
        <div>
          <LazyLoadImage src={Item9} alt="" />
          <h2 className="font-bold text-[2rem] mt-[12px] mb-2">
            Fried Chicken Hub
          </h2>
          <p className="font-normal text-[1.6rem] text-[#575363]">
            $0 delivery fee
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3 ">
            Time:{" "}
            <span className="font-[600] text-black ml-[160px] ">20 min</span>
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3">
            Food Type:{" "}
            <span className="font-[600] text-black ml-[125px] ">Fast Food</span>
          </p>
          <div className="flex gap-[6px]">
            <p className="text-[14px] text-[#575363] font-normal">4.6</p>
            <LazyLoadImage src={Star} alt="" />
            <p className="text-[14px] text-[#575363] font-normal">(2,200)</p>
          </div>
        </div>
        {/* Item 10  */}
        <div>
          <LazyLoadImage src={Item10} alt="" />
          <h2 className="font-bold text-[2rem] mt-[12px] mb-2">
            The Steak Cafe
          </h2>
          <p className="font-normal text-[1.6rem] text-[#575363]">
            $0 delivery fee
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3 ">
            Time:{" "}
            <span className="font-[600] text-black ml-[160px] ">20 min</span>
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3">
            Food Type:{" "}
            <span className="font-[600] text-black ml-[125px] ">Fast Food</span>
          </p>
          <div className="flex gap-[6px]">
            <p className="text-[14px] text-[#575363] font-normal">4.6</p>
            <LazyLoadImage src={Star} alt="" />
            <p className="text-[14px] text-[#575363] font-normal">(2,200)</p>
          </div>
        </div>
        {/* Item 11  */}
        <div>
          <LazyLoadImage src={Item11} alt="" />
          <h2 className="font-bold text-[2rem] mt-[12px] mb-2">
            The Pizza King
          </h2>
          <p className="font-normal text-[1.6rem] text-[#575363]">
            $0 delivery fee
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3 ">
            Time:{" "}
            <span className="font-[600] text-black ml-[160px] ">20 min</span>
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3">
            Food Type:{" "}
            <span className="font-[600] text-black ml-[125px] ">Pizza</span>
          </p>
          <div className="flex gap-[6px]">
            <p className="text-[14px] text-[#575363] font-normal">4.6</p>
            <LazyLoadImage src={Star} alt="" />
            <p className="text-[14px] text-[#575363] font-normal">(2,200)</p>
          </div>
        </div>
        {/* Item 12 */}
        <div>
          <LazyLoadImage src={Item12} alt="" />
          <h2 className="font-bold text-[2rem] mt-[12px] mb-2">
            The French Fries
          </h2>
          <p className="font-normal text-[1.6rem] text-[#575363]">
            $0 delivery fee
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3 ">
            Time:{" "}
            <span className="font-[600] text-black ml-[160px] ">20 min</span>
          </p>
          <p className="text-[14px] text-[#575363] font-normal mb-3 mt-3">
            Food Type:{" "}
            <span className="font-[600] text-black ml-[125px] ">Fast Food</span>
          </p>
          <div className="flex gap-[6px]">
            <p className="text-[14px] text-[#575363] font-normal">4.6</p>
            <LazyLoadImage src={Star} alt="" />
            <p className="text-[14px] text-[#575363] font-normal">(2,200)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
