import React from 'react'
import ShowMore from "../../images/Show-more.svg"

export default function PageNumber() {
  return (
    <div className="mt-[30px] ">
      <p>
        Showing <span>1 - 18</span> of <span>120</span> results
      </p>
      <div className="mt-[16px] flex gap-[16px] ">
        <button className="border-2 w-[44px] h-[44px] rounded-[4px] bg-[#572AF8] text-[#fff]">
          1
        </button>
        <button className="border-2 w-[44px] h-[44px] rounded-[4px] bg-[#fff] text-[#000]">
          2
        </button>
        <button className="border-2 w-[44px] h-[44px] rounded-[4px] bg-[#fff] text-[#000]">
          3
        </button>
        <button className="border-2 w-[44px] h-[44px] rounded-[4px] bg-[#fff] text-[#000]">
          4
        </button>
        <button className="border-2 w-[44px] h-[44px] rounded-[4px] bg-[#fff] text-[#000]">
          5
        </button>
        <img src={ShowMore} alt="" />
      </div>
    </div>
  );
}
