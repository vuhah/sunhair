import Header from "../components/header";
import { ImgSlide1, ImgSlide2 } from "../images/home/thumbnail";

const Slide1 = () => {
  return (
    <div className="slideshow1">
      <div className="container content mt-0">
        <div className="row d-flex align-items-center">
          <div className="col-6">
            <p className="slogan mb-5">YOUR BEAUTY OUT MISSION</p>
            <p className="description w-75">
              We provide ladies all over the world with the most beautiful,
              fashionable hair without causing damage to their natural hair.
            </p>
            <div className="d-flex align-items-center mt-5 pb-5">
              <div className="timeopen me-5">
                <p className="text">OPEN</p>
                <p className="time mt-2 ps-1">09:00 AM</p>
              </div>
              <hr />
              <div className="timeopen ms-5">
                <p className="text">CLOSE</p>
                <p className="time mt-2 ps-1">21:30 PM</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src={ImgSlide1} alt="" className="float-end" />
          </div>
        </div>
      </div>
    </div>
  );
};
const Slide2 = () => {
  return (
    <div
      className="slideshow2"
      style={{ backgroundImage: `url(${ImgSlide2})` }}
    ></div>
  );
};

export default function Thumbnail() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slidesection1 pb-2"
      data-bs-ride="carousel"
    >
      <Header theme={"dark"} />

      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Slide1 />
        </div>
        <div className="carousel-item">
          <Slide2 />
        </div>
        {/* <div className="carousel-item">
          <Slide1 />
        </div> */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
