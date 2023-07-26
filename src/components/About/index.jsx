import Decor from "../../images/About-decor.svg";
import ImageMedia from "../../images/About-media.svg";
import Button from "../Button";

export default function About() {
  return (
    <div className="pb-[100px] bg-[#FFFAE3] mt-[260px]">
      <div className="container">
        <div className="translate-y-[-50%]">
          <img src={Decor} alt="" />
        </div>
        <div className="mt-[150px] flex justify-center items-center gap-[130px]">
          <div className="w-[49%]">
            <img src={ImageMedia} alt="" />
          </div>
          <div className="w-[40%]">
            <h2 className="font-sans text-[4.4rem] font-[600] mb-7">
              About Foodeats
            </h2>
            <p>
              Foodeats helps you find and order food from wherever you are. How
              it works: you type in an address, we tell you the restaurants that
              deliver to that locale as well as showing you droves of pickup
              restaurants near you.
            </p>
            <p className="my-10">
              Want to be more specific? Search by cuisine, restaurant name or
              menu item. We'll filter your results accordingly.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
