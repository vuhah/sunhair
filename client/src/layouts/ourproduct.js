import { AnimationOnScroll } from "react-animation-on-scroll";
import { ExternalLink } from "../images/common";

function OurProducts() {
  return (
    <div className="container our-products">
      <AnimationOnScroll animateIn="animate__backInUp">
        <div className="row d-flex justify-content-center pt-5 align-items-center">
          <div className="col-12 text-center position-relative">
            <p className="title d-inline">OUR PRODUCTS</p>

            <p className="description">
              &quot;We are happy to provide the greatest hair quality in a
              variety of styles and colors &quot;
            </p>
          </div>
        </div>

        <main className="page-content1">
          <div
            className="card1"

          >
            <div className="content1">
              <h2 className="title1">Weft hair</h2>
              <p className="copy1">
              Weft Hair is one of the best seller products with outstanding quality and affordable price.
              </p>
              <button className="btn1">See all</button>
            </div>
          </div>
          <div className="card1">
            <div className="content1">
              <h2 className="title1">Keration Hair</h2>
              <p className="copy1">
              Keratin Hair is the high-end hair products with 100% Vietnamese Human Hair

              </p>
              <button className="btn1">See all</button>
            </div>
          </div>
          <div className="card1">
            <div className="content1">
              <h2 className="title1">Closure</h2>
              <p className="copy1">
              Closure Closures allow the ultimate protection for your hair.

              </p>
              <button className="btn1">See all</button>
            </div>
          </div>
          <div className="card1">
            <div className="content1">
              <h2 className="title1">Bulk Hair</h2>
              <p className="copy1">
              Bulk Hair is perfect solution your hair extensions products with reasonable price raw materials & great quality.

              </p>
              <button className="btn1">See All</button>
            </div>
          </div>
        </main>
        <div className="text-center pb-3">
          <a className=" link" href="/product">
            See all &ensp;
            <img src={ExternalLink} alt="" />
          </a>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default OurProducts;
