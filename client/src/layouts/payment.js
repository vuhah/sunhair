import {
  VisaImage,
  MoneyGram,
  Western,
  MasterCard,
  USDAccountBank,
  DHL,
  FedEX,
  UPS,
} from "../images/home/payment/index";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Slider from "react-slick";
import React, { Component } from "react";
import "/node_modules/slick-carousel/slick/slick.css"; 
import "/node_modules/slick-carousel/slick/slick-theme.css"; 

export default function Payment() {
  const settings1 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2800,
    autoplaySpeed: 2800,
    cssEase: "linear"
  };

  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="container-fluid payment">
      <AnimationOnScroll
        animateIn="animate__fadeInDownBig"
        className="container ps-5"
      >
        <p className="title">PAYMENT & </p>
        <div className="row align-items-center">
          <div className="col-7">
            <p className="title">DELIVERY METHOD </p>
          </div>
          <div className="col-5">
            <div className="hr"></div>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUpBig"  className="container mt-5 ps-5 mb-5">
        <div className="row">
          <Slider {...settings1}>
            <div>
              <img src={MasterCard} className="mx-auto " />
            </div>
            <div>
              <img src={VisaImage} className="mx-auto" />
            </div>
            <div>
              <img src={MoneyGram} className="mx-auto" />
            </div>
            <div>
              <img src={USDAccountBank} className="mx-auto" />
            </div>
            <div>
              <img src={Western} className="mx-auto" />
            </div>
          </Slider>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUpBig"  className="container ps-5 p2">
        <div className="row align-content-center">
          <Slider {...settings2}>
            <div >
              <img src={DHL} className="mx-auto"/>
            </div>
            <div >
              <img src={UPS} className="mx-auto" />
            </div>
            <div >
              <img src={FedEX} className="mx-auto" />
            </div>
          </Slider>
        </div>
      </AnimationOnScroll>

    </div>
  );
}
