import { ExternalLink } from "../images/common";
function OurProducts() {
  return (
    <div className="container our-products">
      <div className="row d-flex justify-content-center pt-5 align-items-center">
        <div className="col-12 text-center position-relative">
          <p className="title d-inline">OUR PRODUCTS</p>

          <p className="description">
            &quot;We are happy to provide the greatest hair quality in a variety
            of styles and colors &quot;
          </p>
        </div>
      </div>

      <main className="page-content1">
        <div className="card1">
          <div className="content1">
            <h2 className="title1">Weft hair</h2>
            <p className="copy1">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button className="btn1">See all</button>
          </div>
        </div>
        <div className="card1">
          <div className="content1">
            <h2 className="title1">Keration Hair</h2>
            <p className="copy1">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button className="btn1">See all</button>
          </div>
        </div>
        <div className="card1">
          <div className="content1">
            <h2 className="title1">Closure</h2>
            <p className="copy1">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button className="btn1">See all</button>
          </div>
        </div>
        <div className="card1">
          <div className="content1">
            <h2 className="title1">Bulk Hair</h2>
            <p className="copy1">
              Check out all of these gorgeous mountain trips with beautiful
              views of, you guessed it, the mountains
            </p>
            <button className="btn1">View Trips</button>
          </div>
        </div>
      </main>
      <div className="text-center pb-3">
        <a className=" link" href="/">
          See all &ensp;
          <img src={ExternalLink} alt="" />
        </a>
      </div>
    </div>
  );
}

export default OurProducts;
