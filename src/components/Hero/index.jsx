import "./style.css";
import HeroImgContent1 from "../../images/hero_content1.svg";
import HeroImgContent2 from "../../images/hero_content2.svg";
import Button from "../Button";
import HeroImgFooter1 from "../../images/content-footer1.svg";
import HeroImgFooter2 from "../../images/content-footer2.svg";
import HeroImgMedia from "../../images/Hero-media.svg"

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <p className="hero__content-town">#The Best in Town</p>
            <h2 className="hero__content-title">
              Get food <img src={HeroImgContent1} alt="" />
              delivery and more <img src={HeroImgContent2} alt="" />
            </h2>
            <p className="hero__content-desc">
              You want it. We get it. Food, drinks, groceries, and more
              available for delivery and pickup.
            </p>
            <div className="hero__content-zip">
              <div className="hero__content-input">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                <input
                  type="text"
                  placeholder="Location or zip code"
                  style={{ outline: "none", border: "none" }}
                ></input>
              </div>
              <Button>Explore</Button>
            </div>
            <div className="hero__content-footer">
              <span className="hero__content-app">Get the app:</span>
              <img src={HeroImgFooter1} alt="" />
              <img src={HeroImgFooter2} alt="" />
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__media-img">
              <img src={HeroImgMedia} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
