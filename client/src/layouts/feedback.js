import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  Feedback1,
  Feedback2,
  Feedback3,
  Feedback4,
  Feedback5,
  Feedback6,
  Feedback7,
  Feedback8,
  Feedback9,
} from "../images/home/feedback";

function Feedback() {
  return (
    <div className="feedback">
      <div className="container">
        <AnimationOnScroll
          animateIn="animate__bounceInLeft"
          className=" row justify-content-around"
        >
          <div className="col-4 pt-3">
            <div className="hr mt-5"></div>
          </div>
          <div className="col-8 text-end">
            <p className="title">
              WHAT A CUSTOMERS <br /> SAYING{" "}
            </p>
          </div>
        </AnimationOnScroll>
      </div>
      {/* <p className="title text-end a">SAYING? </p> */}

      <AnimationOnScroll animateIn="animate__backInDown" className="container-fluid">
        <div className="horizontal">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row mt-5 justify-content-around">
                    <div className="col-4 text-center">
                      <img src={Feedback1} alt="" />
                    </div>
                    <div className="col-4 text-center">
                      <img src={Feedback2} alt="" />
                    </div>
                    <div className="col-4 text-center">
                      <img src={Feedback3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row mt-5 justify-content-around">
                    <div className="col-4 text-center">
                      <img src={Feedback4} alt=""  className="imgsize"/>
                    </div>
                    <div className="col-4 text-center">
                      <img src={Feedback5} alt="" className="imgsize" />
                    </div>
                    <div className="col-4 text-center">
                      <img src={Feedback6} alt="" className="imgsize" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container">
                  <div className="row mt-5 justify-content-around">
                    <div className="col-4 text-center">
                      <img src={Feedback7} alt="" className="imgsize" />
                    </div>
                    <div className="col-4 text-center">
                      <img src={Feedback8} alt="" className="imgsize" />
                    </div>
                    <div className="col-4 text-center">
                      <img src={Feedback9} alt="" className="imgsize" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Feedback;
