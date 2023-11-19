import {Header1, Header2} from "../components/header";
import {
  Bg,
  Vector1,
  Vector2,
  Vector3,
  Vector4,
} from "../images/blog";
import Blog0 from "../images/blogdetail/blog0/0v1.jpg";
import Blog1 from "../images/blogdetail/blog1/1v1.jpg";
import Blog2 from "../images/blogdetail/blog2/2v1.jpg";
import Blog3 from "../images/blogdetail/blog3/3v1.jpg";
import Blog4 from "../images/blogdetail/blog4/4v1.jpg";
import Blog6 from "../images/blogdetail/blog6/6v1.jpg";
import Blog7 from "../images/blogdetail/blog7/7v1.jpg";
import Blog8 from "../images/blogdetail/blog8/8v1.jpg";
import Blog9 from "../images/blogdetail/blog9/9v1.jpg";
import Blog10 from "../images/blogdetail/blog10/10v1.jpg";

import { AnimationOnScroll } from "react-animation-on-scroll";
import Subrice from "../layouts/subcribe";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="blog">
      <Header2/>
      <Header1 />
      <AnimationOnScroll
        className="imgheading d-flex align-items-center"
        style={{ backgroundImage: `url(${Bg})` }}
        animateIn="animate__backInDown"
      >
        <div className="tilte">
          <h1>YOUR BEAUTY - OUR MISSION</h1>
          <h2 className="mt-4">
            Sun Hair was founded with the goal of providing ladies all over the
            world with the most beautiful, fashionable hair without causing
            damage to their natural hair.
          </h2>
          <Link to="/about-us">
            <button className="readmore">Read more</button>
          </Link>
        </div>
      </AnimationOnScroll>

      <div
        className="vector1"
        style={{ backgroundImage: `url(${Vector1})` }}
      ></div>
      <div
        className="vector2"
        style={{ backgroundImage: `url(${Vector2})` }}
      ></div>
      <div
        className="vector3"
        style={{ backgroundImage: `url(${Vector3})` }}
      ></div>
      <div
        className="vector4"
        style={{ backgroundImage: `url(${Vector4})` }}
      ></div>

      <AnimationOnScroll
        className="container content"
        animateIn="animate__backInDown"
      >
        <div className="featured">LASTEST</div>

        <Link
          to="/blog/how-to-sleep-comfortably-with-hair-extensions"
          className="row mt-5 align-items-center pe-auto blogheading"
        >
          <div className="col-3">
            <img src={Blog0} alt="" className="thumbnail" />
          </div>
          <div className="col-9 ps-5">
            <p className="title">
              How To Sleep Comfortably With Hair Extensions
            </p>
            <p className="contentsection mt-4">
              For many women, hair extensions and wigs have become a lifesaver
              to help refresh their everyday looks quickly. The variety of hair
              extensions has brought more options and, at the same time,...{" "}
            </p>
          </div>
        </Link>

        <Link
          to="/blog/how-to-distinguish-body-wave-and-loose-wave-hair"
          className="row mt-5 align-items-center pe-auto blogheading"
        >
          <div className="col-3">
            <img src={Blog1} alt="" className="thumbnail" />
          </div>
          <div className="col-9 ps-5">
            <p className="title">
              How To Distinguish Body Wave And Loose Wave Hair?
            </p>
            <p className="contentsection mt-4">
              Nowadays, women have hundreds of hairstyles to wear on their
              heads. They come to hair extensions for various choices because
              women change their hairstyle at different events and occasions,...{" "}
            </p>
          </div>
        </Link>

        <Link
          to="/blog/the-difference-between-bone-straight-and-natural-straight-hair"
          className="row mt-5 align-items-center blogheading"
        >
          <div className="col-3">
            <img src={Blog2} alt="" className="thumbnail" />
          </div>
          <div className="col-9 ps-5">
            <p className="title">
              The Difference Between Bone Straight And Natural Straight Hair
            </p>
            <p className="contentsection mt-4">
              Bone straight and naturally straight hair are very familiar to
              every woman, but not everyone knows that the difference between
              bone straight and naturally straight hair is based on four
              factors. Please follow us to find out. ,...{" "}
            </p>
          </div>
        </Link>

        <Link
          to="/blog/tape-in-extensions-why-i-should-buy-them"
          className="row mt-5 align-items-center  blogheading"
        >
          <div className="col-3">
            <img src={Blog3} alt="" className="thumbnail" />
          </div>
          <div className="col-9 ps-5">
            <p className="title">Tape-in Extensions: Why I Should Buy Them?</p>
            <p className="contentsection mt-4">
              In the last decades, we have witnessed ingenious hair trends
              thanks to the wizard of modern technology. One of the most favored
              hair extension methods on the list is tape-ins. Due to its easy
              and quick installation, a tape-in extension has undoubtedly become
              a must-have item for all ladies worldwide.,...{" "}
            </p>
          </div>
        </Link>

        <Link
          to="/blog/how-to-choose-a-wig-for-a-cancer-patient"
          className="row mt-5 align-items-center blogheading"
        >
          <div className="col-3">
            <img src={Blog4} alt="" className="thumbnail" />
          </div>
          <div className="col-9 ps-5">
            <p className="title">How To Choose A Wig For A Cancer Patient?</p>
            <p className="contentsection mt-4">
              Before beginning radiation therapy, most cancer patients always
              select an appropriate wig to replace their natural hair for an
              extended period. Finding a wig might be challenging for some
              people since they don't know how to pick the proper hair color,
              length, or style,...
            </p>
          </div>
        </Link>

        {/* <Link to="/blog/about-us" className="row mt-5 align-items-center ">
          <div className="col-3">
            <img src={Sleeping} alt="" className="thumbnail" />
          </div>
          <div className="col-9 ps-5">
            <p className="title">About us</p>
            <p className="contentsection mt-4">
              Sun Hair was founded with the goal of providing ladies all over
              the world with the most beautiful, fashionable hair without
              causing damage to their natural hair. Sun Hair is proud to be one
              of Vietnam's leading hair suppliers, ...
            </p>
          </div>
        </Link> */}

        <Link
          to="/blog/which-are-viatmin-hair-growth-need"
          className="row mt-5 align-items-center blogheading"
        >
          <div className="col-3">
            <img src={Blog6} alt="" className="thumbnail" />
          </div>
          <div className="col-9 ps-5">
            <p className="title">Which are Vitamin hair growth need?</p>
            <p className="contentsection mt-4">
              Vitamins and supplements that promise hair growth almost sound too
              good to be true. Can taking a pill once or twice a day really make
              your hair longer, stronger and healthier?...
            </p>
          </div>
        </Link>

        <Link
          to="/blog/how-to-distinguish-human-hair-vs-synthetic-hair"
          className="row mt-5 align-items-center blogheading"
        >
          <div className="col-3">
            <img src={Blog7} alt="" className="thumbnail" />
          </div>
          <div className="col-9 ps-5">
            <p className="title">
              How to distinguish Human Hair Vs Synthetic Hair
            </p>
            <p className="contentsection mt-4">
              A synthetic wig can be better at holding its style even after
              washing. Human hair wigs are made out of real human hair so they
              look and feel real, but they also have to be re-styled after
              washing just like real hair. Keep reading to learn more about what
              makes synthetic and human hair wigs different!...
            </p>
          </div>
        </Link>

        {/* <div className="row mt-5 align-items-center ">
          <div className="col-3">
            <img src={Sleeping} alt="" className="thumbnail" />
          </div>
          <div className="col-9 ps-5">
            <p className="title">
              How To Sleep Comfortably With Hair Extensions
            </p>
            <p className="contentsection mt-4">
              For many women, hair extensions and wigs have become a lifesaver
              to help refresh their everyday looks quickly. The variety of hair
              extensions has brought more options and, at the same time,...{" "}
            </p>
          </div>
        </div> */}

        <Link
          to="/blog/9-tricks-for-healthier-fully-looking-hair"
          className="row mt-5 align-items-center blogheading"
        >
          <div className="col-3">
            <img src={Blog8} alt="" className="thumbnail" />
          </div>
          <div className="col-9 ps-5">
            <p className="title">9 Tricks for Healthier, Fuller-Looking Hair</p>
            <p className="contentsection mt-4">
              While genetics play a key role, your diet, the weather, pollution,
              and your overall approach to hair care are all critical to
              maintaining your crowning glory. Find out how a healthy diet and
              proper care can keep your mane a head above the rest...
            </p>
          </div>
        </Link>

        <Link
          to="/blog/some-tips-about-hair-extensions"
          className="row mt-5 align-items-center blogheading"
        >
          <div className="col-3">
            <img src={Blog9} alt="" className="thumbnail" />
          </div>
          <div className="col-9 ps-5">
            <p className="title">Some Tips About Hair Extensions</p>
            <p className="contentsection mt-4">
              1. Choose High Quality Hair No matter how carefully you look after
              your new hair extensions, they’ll only ever be as good as the hair
              itself.
            </p>
          </div>
        </Link>
        <Link
          to="/blog/what-are-weft-hair-extensions-anyway"
          className="row mt-5 align-items-center blogheading"
        >
          <div className="col-3">
            <img src={Blog10} alt="" className="thumbnail" />
          </div>
          <div className="col-9 ps-5">
            <p className="title">WHAT ARE WEFT HAIR EXTENSIONS, ANYWAY?</p>
            <p className="contentsection mt-4">
              Weft hair extensions are created with real human hair which is
              sewn (either by hand or by machine) onto a horizontal strip, or
              “weft.” The stylists here at Autumn Markley Salon then “sew” these
              strips into the natural hair ...
            </p>
          </div>
        </Link>
      </AnimationOnScroll>
      <Subrice />
      <Footer />
    </div>
  );
}
