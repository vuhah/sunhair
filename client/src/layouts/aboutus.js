import { Sun } from "../images/home/aboutus";
import { ExternalLink } from "../images/common";
import { AnimationOnScroll } from "react-animation-on-scroll";
 
export default function AboutUs() {
  return (
    <div className="container about-us">
      <div className="row justify-content-between align-items-center">
        <div className="col-5">
          <div className="image-wrapper shine">
            <img
              src={Sun}
              alt="Image here, hover me and watch me shine!"
            />
          </div> 
        </div>
        <AnimationOnScroll animateIn="animate__bounceInLeft" className=" col-6 ">
          <p className="title float-end">ABOUT US</p>
          <p className="content float-end text-end mt-3">
            Sun Hair was founded with the goal of providing ladies all over the
            world with the most beautiful, fashionable hair without causing
            damage to their natural hair. Sun Hair is proud to be one of
            Vietnam&apos;s leading hair suppliers, offering the most excellent
            value and premium services.
          </p>
          <p className="content float-end text-end mt-3">
            Sun means light, which is indispensable for sustaining life.
            Inspired by sun and shine, we desire to make all women natural
            beauty in their way through our hair products
          </p>
          <a href="#" className="float-end text-end mt-5">
            Learn more &ensp;
            <img
              src={ExternalLink}
              alt="Image here, hover me and watch me shine!"
            />
          </a>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
