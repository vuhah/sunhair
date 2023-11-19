import { ImgSlide2, ImgSlide3v1, ImgSlidev1 } from "../images/home/thumbnail";
import { Header1, Header2 } from "../components/header";
import { useState } from "react";

export default function Thumbnail() {
  const [theme, setTheme] = useState("dark");

  const Slide1 = () => {
    // setTheme("dark");
    // return (
    //   <div className="slideshow1">
    //     <div className="container content mt-0">
    //       <div className="row d-flex align-items-center">
    //         <div className="col-6">
    //           <p className="slogan mb-5">YOUR BEAUTY OUR MISSION</p>
    //           <p className="description w-75">
    //             We provide ladies all over the world with the most beautiful,
    //             fashionable hair without causing damage to their natural hair.
    //           </p>
    //           <div className="d-flex align-items-center mt-5 pb-5">
    //             <div className="timeopen me-5">
    //               <p className="text">OPEN</p>
    //               <p className="time mt-2 ps-1">09:00 AM</p>
    //             </div>
    //             <hr />
    //             <div className="timeopen ms-5">
    //               <p className="text">CLOSE</p>
    //               <p className="time mt-2 ps-1">06:00 PM</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-6">
    //           <img src={Img1elemenr} alt="" className="image float-end" />
    //         </div>
    //       </div>
    //     </div>
    //     <Header1 theme={"dark"} />
    //   </div>
    // );
    setTheme("light");
    return (
      <div
        className="slideshow2"
        style={{ backgroundImage: `url(${ImgSlidev1})` }}
      >
        <Header1 theme={"light"} />
      </div>
    );
  };

  const Slide2 = () => {
    setTheme("dark");
    return (
      <div
        className="slideshow2"
        style={{ backgroundImage: `url(${ImgSlide2})` }}
      >
        <Header1 theme={"dark"} />
      </div>
    );
  };

  const Slide3 = () => {
    setTheme("light");
    return (
      <div
        className="slideshow2"
        style={{ backgroundImage: `url(${ImgSlide3v1})` }}
      >
        <Header1 theme={"light"} />
      </div>
    );
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slidesection1 pb-2"
      data-bs-ride="carousel"
    >
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
        <div className="carousel-item">
          <Slide3 />
        </div>
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
