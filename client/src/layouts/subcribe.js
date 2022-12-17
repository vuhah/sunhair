import { AnimationOnScroll } from "react-animation-on-scroll";
import { ImgSubcribe, BgSubcribe } from "../images/home/subcribe";
function Subcribe() {
  return (
    <div
      className="container-fluid subcribe"
      style={{ backgroundImage: `url(${BgSubcribe})` }}
    >
      <AnimationOnScroll animateIn="animate__backInUp" className="container">
        <div className="col-10 offset-1">
          <div
            className="subcribe-frame d-flex justify-content-around align-items-center"
            style={{ backgroundImage: `url(${ImgSubcribe})` }}
          >
            <div className="des">
              <p className="title">
                SUBCRIBE OUR <br /> NEWSLETTER{" "}
              </p>
              <p>Be the first one to know about discounts, offers and events</p>
            </div>
            <div className="form">
              <div className="regular d-flex justify-content-between align-items-center">
                <input
                  className="form-regular"
                  type="input"
                  placeholder="Your email here ..."
                />
                <button type="button" className="submit-regular">
                  <p className="text">Regular</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Subcribe;
