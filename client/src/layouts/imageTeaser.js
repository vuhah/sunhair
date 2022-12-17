import { Slide1, Slide2, Slide3 } from "../images/home/imageteaser/index.js";

function ImageSet1() {
  return (
    <div className="frame d-flex justify-content-around">
      <img src={Slide1} alt="" />
      <img className="image-center ms-3 me-3 w-50" src={Slide2} alt="" />
      <img src={Slide3} alt="" />
    </div>
  );
}
function ImageSet2() {
  return (
    <div className="frame d-flex justify-content-around">
      <img src={Slide2} alt="" />
      <img className="image-center ms-3 me-3 w-50" src={Slide3} alt="" />
      <img src={Slide1} alt="" />
    </div>
  );
}
function ImageSet3() {
  return (
    <div className="frame d-flex justify-content-around">
      <img src={Slide3} alt="" />
      <img className="image-center ms-3 me-3 w-50" src={Slide1} alt="" />
      <img src={Slide2} alt="" />
    </div>
  );
}

export default function ImageTeaser() {
  return (
    <div className="horizontal">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <ImageSet1 />
          </div>
          <div className="carousel-item">
            <ImageSet2 />
          </div>
          <div className="carousel-item ">
            <ImageSet3 />
          </div>
        </div>
      </div>
    </div>
  );
}
