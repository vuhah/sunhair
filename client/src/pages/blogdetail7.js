import * as React from "react";
import {Header1, Header2} from "../components/header";
import Footer from "../components/footer";
import Subcrice from "../layouts/subcribe";
import { Vector1, Vector2, Vector3, Vector4 } from "../images/blog";
import Img2 from "../images/blogdetail/blog7/7v2.jpg";
import Img4 from "../images/blogdetail/blog6/6v4.jpg";
import Img3 from "../images/blogdetail/blog7/7v3.jpg";

export default function BlogDetail7() {
  return (
    <div className="showBlog">
      <Header1 />
      <Header2/>
      <div
        className="vector1"
        style={{ backgroundImage: `url(${Vector1})` }}
      ></div>
      <div
        className="vector2"
        style={{ backgroundImage: `url(${Vector2})` }}
      ></div>
      {/* <div
        className="vector3"
        style={{ backgroundImage: `url(${Vector3})` }}
      ></div> */}
      <div
        className="vector4"
        style={{ backgroundImage: `url(${Vector1})` }}
      ></div>
      <div className="container blockDetailPage7">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1>How to distinguish Human Hair Vs Synthetic Hair</h1>
            <div className="p1">October 12 - Sun Nguyen</div>
            <div className="detailTitle">
              The difference between synthetic and human hair wigs is in the
              fiber.
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10">
            <div className="image"></div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-8">
            <p>
              A synthetic wig can be better at holding its style even after
              washing. Human hair wigs are made out of real human hair so they
              look and feel real, but they also have to be re-styled after
              washing just like real hair. Keep reading to learn more about what
              makes synthetic and human hair wigs different!
            </p>
            <p>
              Which is right for you? Maybe both. Human Hair and Synthetic Hair
              have advantages and limitations which make them the right choice
              at different times. Both are great choices for you depending on
              your budget, time, and needs. Optimally, you will choose to have
              both on hand as they each have their pluses! Here are the facts so
              you can know what circumstance is most beneficial for each.
            </p>
            <p>
              Human hair wigs offer the most natural look and feel. And while
              they can be the more expensive pick, with the proper care, they
              are also more durable. Human hair wigs can last between 1 and 3
              years. They are remarkably soft with a shine and movement that is
              not easily duplicated in synthetic hair.{" "}
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-10 d-flex justify-content-center">
            <img src={Img2} alt="" className="rounded w-100" />
          </div>
        </div>

        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-8 mb-5">
            <p>
              There are generally four basic types of human hair used in wigs:
              Chinese, Indonesian, Indian and European/Caucasian. The majority
              of wigs are made from Asian hair. Chinese hair has a thicker
              denier (unit of fineness) which results in the hair being
              extremely straight. It is a bit more resistant to curls and can
              therefore be harder to style. Indonesian hair is found in greater
              supply and is less costly -- it can often be found in ethnic style
              wigs. Indian hair has thinner denier close to that of European
              hair but with a bit more texture. European hair is the most sought
              after for its fine denier but due to its increasingly limited
              supply in the marketplace, it is more expensive.
            </p>

            <p>
              The origin of the hair is not the only factor, however. Processing
              technique is directly related to the strength and quality of the
              end-product. The chemicals needed to sanitize and strip away the
              original color to produce different curl patterns and colors are
              very strong and can affect the integrity of the hair depending on
              the method used. When a higher quality of chemicals and a more
              artful approach to processing is used, the results are higher
              quality products and thus higher price.
            </p>

            <p>
              Remy human hair is considered a premium option. Hair follicles are
              kept running in the same direction when collecting and crafting
              the wig or hairpiece. With cuticles all running in the same
              direction, tangling is greatly reduced and hair looks and feels
              silkier. Beware imposters with suspiciously low-priced products –
              on Wigs.com you’ll only find high-grade Remy hair.
            </p>
            <p>
              It is extremely important to use care products specifically
              formulated for highly processed human hair. Also keep in mind that
              wearable hair does not benefit from naturally occurring oils from
              the scalp. It is important to hydrate and condition hair daily.
            </p>
            <p>
              Human hair wigs are by far the superior choice if quality is the
              only factor. Other than price, the main drawback to human hair is
              required maintenance -- as with natural hair, it requires effort.
              For many, daily styling is actually preferable as it allows for
              more control over the appearance as well as a sense of normalcy
              that can come with the daily hair styling ritual.Keep in mind that
              human hair does not come out of the box ready to wear. You may
              choose to have it customized by a professional stylist to get
              exactly the look you like.
            </p>
            <p>It does take a bit of extra effort… but is worth it!</p>
            <h3 className="mt-5">Synthetic Hair</h3>
          </div>
        </div>

        <div className="row justify-content-center ">
          <div className="col-10 justify-content-center d-flex">
            <img src={Img3} alt="" className="rounded" />
          </div>
        </div>

        <div className="row justify-content-center  mb-5">
          <div className="col-8 mb-5">
            <p>
              With technological advances, synthetic hair has come a long way in
              recent years. In some cases it is difficult to tell the difference
              -- the density and texture are such that they feel almost like
              human hair. As a matter of fact, with some of the higher quality
              synthetic pieces, you would never know they were not natural human
              hair if you didn’t have the human hair right next to it to
              compare!
            </p>

            <p>
              However, what synthetic hair offers in ease, it lacks in
              versatility. It cannot be styled to look many different ways like
              its human hair counterparts. Only special Heat Friendly synthetic
              hair is heat styleable to change the curl pattern. Keep in mind,
              even the heat friendly fiber can be difficult to style as
              synthetic fiber is more resistant to change. Synthetic hair is
              also less durable than human hair. With proper care you can expect
              synthetic hair wigs and hairpieces to last about 4-6 months – heat
              friendly synthetic hair 2- 3 months. It is important to follow our
              care recommendations in order to get the optimal life span from
              your hair!
            </p>

            <p>
              The limited versatility of synthetic hair becomes less of a
              consideration when you factor in the affordability. You may choose
              to have a wide variety of styles on hand and ready to wear!
            </p>
          </div>
        </div>
      </div>
      <Subcrice />
      <Footer />
    </div>
  );
}
