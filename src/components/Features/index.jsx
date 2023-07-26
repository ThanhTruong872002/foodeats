import Button from "../Button";
import FeatureImg1 from "../../images/Feature-img1.svg";
import FeatureImg2 from "../../images/Feature-img2.svg";
import FeatureImg3 from "../../images/Feature-img3.svg";

export default function Features() {
  return (
    <div className="my-[160px]">
      <div className="container">
        <div className="flex flex-col gap-[18px] items-center justify-center mb-[55px]">
          <h2 className="font-sans text-[4.4rem] w-[470px] text-center">
            It’s all here. All in one platform.
          </h2>
          <p className="font-[400] text-[1.8rem] text-grey w-[470px] text-center">
            Order food and grocery delivery online from hundreds of restaurants
            and shops nearby.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[30px]">
          <div className="flex flex-col justify-center items-center ">
            <img src={FeatureImg1} alt="" />
            <h2 className="font-bold text-[30px] mt-[38px] mb-[18px]">
              Deliver With Us
            </h2>
            <p className="text-base text-grey mb-[38px] text-center w-[474px]">
              Sign up today, start earning tomorrow. Build a new career in
              delivery service with us.
            </p>
            <Button>Learn More</Button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={FeatureImg2} alt="" />
            <h2 className="font-bold text-[30px] mt-[38px] mb-[18px] ">
              Deliver With Us
            </h2>
            <p className="text-base text-grey mb-[38px] text-center w-[474px]">
              Sign up today, start earning tomorrow. Build a new career in
              delivery service with us.
            </p>
            <Button>Learn More</Button>
          </div>
          <div className="mt-[244px]">
            <h2 className="font-sans text-[4.4rem] font-[600]">
              Feed your employees
            </h2>
            <p className="text-base text-grey mb-[38px]">
              Fuel your business with great food. Treat employees and clients to
              corporate meals with food delivery that’s customizable to your
              business.
            </p>
            <ul className="mb-12">
              <li className="text-base text-grey">Meals in the office</li>
              <li className="text-base text-grey">Meals after hours</li>
              <li className="text-base text-grey">Meals at home</li>
              <li className="text-base text-grey">Meals while traveling</li>
            </ul>
            <Button>Get Started </Button>
          </div>

          <div className="mt-[160px]">
            <img src={FeatureImg3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
