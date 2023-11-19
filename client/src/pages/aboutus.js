import {Header1, Header2} from "../components/header";
import Img1 from "../images/aboutus/1.png";
import Img2 from "../images/aboutus/2.png";
import Footer from "../components/footer"
import {AnimationOnScroll} from "react-animation-on-scroll"

export default function AboutusPage() {
  return (
    <div className="aboutuspage">
      <Header1 />
      <div className="container content">
        <div className="row rowcontent align-content-center">
          <AnimationOnScroll animateIn="animate__backInDown" className="col-4">
            <h1 className="aboutustitle">About us</h1>
            <p className="textcontent mt-5">
              Sun Hair was founded with the goal of providing ladies all over
              the world with the most beautiful, fashionable hair without
              causing damage to their natural hair. Sun Hair is proud to be one
              of Vietnam's leading hair suppliers, offering the most excellent
              value and premium services.
            </p>
            <img src={Img1} alt="" className="image1" />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__backInDown" className="col-7 offset-1 pt-4">
            <img src={Img2} alt="" className="image2 w-100" />
            <p className="textcontent mt-5">
              We sell 100% human hair from Vietnamese ladies. Our items come in
              a variety of colors, lengths, kinds, and textures. We provide a
              large selection of hair products, both in stock and custom-made.
              Retailing and wholesale are also options. Our focus remains on
              machine weft hair, closures, and frontal hair with a variety of
              texture and color options.
            </p>
            <p className="textcontent mt-4">
              Sun Hair has over thirteen years of experience in the hair
              industry and is always striving to enhance product and service
              quality in order to fulfill the demands of customers all over the
              world. Our goal is to enable you to feel and look your best by
              inspiring confidence in addition to providing high-quality hair.
            </p>
          </AnimationOnScroll>
        </div>

        <AnimationOnScroll animateIn="animate__backInLeft" className="row justify-content-center ">
          <div className="col-8 break"></div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__backInRight" className="row justify-content-center mt-5">
          <div className="col-4 m-0 p-0">
            <p className="minititle">
              Sun Hair Company Is New To Social Media?
            </p>
          </div>
          <div className="col-1">
            <div className="minibreak"></div>
          </div>
          <div className="col-7">
            <p className="textcontent2">
              Sun Hair may also be new to social media. We are Vietnam's first
              hair manufacturer, established in 1986, and focus on the
              manufacturing and delivery of wholesale orders directly to loyal
              customers or clients who visited Vietnam and purchased directly
              from our factory. However, in order to promote Vietnamese hair
              brands to the globe and provide every consumer the opportunity to
              experience the greatest high quality products at the most
              reasonable prices, we have determined to market on social media so
              that customers all over the world could buy hair directly from our
              hair factory!
            </p>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__backInLeft" className="row ourvision">
          <div className="col-8">
            <p className="textcontent2">
              Sun Hair is on its way to becoming an international trademark,
              demonstrating to the world that we can provide enormous value to
              our consumers.
            </p>
          </div>
          <div className="col-2">
            <div className="minibreak2"></div>
          </div>
          <div className="col-2 ">
            <p className="minititle ">Our Vision</p>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__backInRight" className="row justify-content-center section3">
          <div className="col-4 m-0 p-0">
            <p className="minititle">Our Mission</p>
          </div>
          <div className="col-1">
            <div className="minibreak3"></div>
          </div>
          <div className="col-7">
            <p className="textcontent2">
              Your Beauty - Our Mission: Our goal is to bring beauty to all
              women worldwide. We are working hard to create this win-win
              scenario and cordially invite you to participate. Choose SUN HAIR
              as your trustworthy partner. We wish to collaborate with people
              from many industries to achieve a bright future.
            </p>
          </div>
        </AnimationOnScroll>
      </div>
      <Footer/>
    </div>
  );
}
