import * as React from "react";
import {Header1, Header2} from "../components/header";
import Footer from "../components/footer";
import Subcrice from "../layouts/subcribe";
import { Vector1, Vector2, Vector3, Vector4 } from "../images/blog";
import Img1 from "../images/blogdetail/blog2/2v1.jpg";
import Img2 from "../images/blogdetail/blog2/2v2.jpg";
import Img3 from "../images/blogdetail/blog2/2v3.jpg";

export default function BlogDetail2() {
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

      <div className="container blockDetailPage2">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1>
              The Difference Between Bone Straight And Natural Straight Hair
            </h1>
            <div className="p1">October 12 - Sun Nguyen</div>
            <div className="detailTitle">
              Bone straight and naturally straight hair are very familiar to
              every woman, but not everyone knows that the difference between
              bone straight and naturally straight hair is based on four
              factors. Please follow us to find out.
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10 justify-content-center">
            <div className="image"></div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-8">
            <div className="section1">
              <h2 className="mt-5">Overview</h2>
              <div className="detailHeading1">
                <div className="mt-5">
                  <p>
                    Although both bone straight and normal straight hair are
                    straight, their characteristics differ, resulting in two
                    distinct looks:
                  </p>
                  <h3 className="mt-4 mb-2">Bone straight hair: </h3>
                  <p>
                    This bony haircut is highly straight and will straighten
                    quickly if you style it. It is called “straight bone”
                    because of its straightness. It is of high quality as it is
                    not chemically treated and is only heat-steamed to soften
                    and smooth it.
                  </p>
                  <h3 className="mt-4 mb-2">Natural straight hair:</h3>
                  <p>
                    This hairstyle has natural straightness like real human
                    hair.
                  </p>
                  <p>
                    Both of these hairstyles are pretty popular with girls.
                    Straight hair and normal straight hair both have straight
                    lines. However, they are not the same. To know which
                    hairstyle is best for you, you must first understand the
                    difference between linear, straight hair and normal straight
                    hair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-4">
            <img src={Img2} alt="" />
          </div>
          <div className="col-6">
            <div className="section2">
              <h2>
                The difference between bone straight and naturally straight hair
              </h2>
              <div className="detailHeading2">
                <div className="detailContent2">
                  <p className="mt-3">
                    Many people have these two hairstyles, but not everyone
                    knows the difference between straight and straight hair. So
                    in the next paragraph, we’ll analyze four factors for you:
                    texture, price, popularity, and usage.
                  </p>{" "}
                </div>
                <div className="blockContent2">
                  <h3 className="mt-5">About texture</h3>
                  <div className="contentBlock2">
                    <p>
                      With the naked eye, you can tell the difference between
                      straight and straight hair based on consistency.
                    </p>
                    <p>
                      Bone straight hair is smooth, flat, and extremely soft;
                      not everyone knows how to keep it straight, while the
                      texture of the hair is usually a bit coarse. The velvety,
                      silky smoothness of this straight hair type is due to the
                      excellent quality of this hair, it has not been chemically
                      treated, and it only needs simple heat absorption to make
                      the hair softer and smoother.
                    </p>
                    <p>
                      Because of its incredibly smooth and straight properties,
                      bone-straight hair will remain silky and untidy even while
                      walking in the wind. Conversely, normal straight hair will
                      have the same features as human hair, so that it will be
                      coarse and not as smooth as straight hair.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-10">
              <p>
                One difference is that ordinary straight hair is suitable for
                curling, while straight hair with bone is not. When curling your
                hair with an iron, the bone-straight hair texture is difficult
                to bend and straighten quickly. On the other hand, normal
                straight hair is perfect for curling as the hair remains in
                curl.
              </p>
              <p>
                So bone straight hair is that straight hair has very smooth,
                flat, and shiny bones, while ordinary straight hair looks like
                human hair and is the perfect balance between soft and slightly
                wavy hair. Natural straight hair gives a more full and fluffy
                look than other hairstyles.
              </p>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-6">
              <div className="blockContent2">
                <h3 className="">About the price</h3>
                <div className="contentBlock2">
                  <p>
                    The difference between straight hair with bones and regular
                    straight hair also depends on the price of these two
                    products. Since the textures of these two hair types are
                    different, the cost will change, which is entirely
                    understandable.
                  </p>
                  <p>
                    The price difference between straight and straight hair is
                    that short and straight hair takes more production stages
                    than the other, more production stages, and therefore
                    requires more labor and labor. Straight hair is also
                    smoother, so the price will be higher. Bibohair factory
                    Vietnam, with bone straight hair, we only charge $3 more
                    than the natural hair price list for all lengths. Great!!!
                  </p>
                </div>
              </div>
              <div className="blockContent2 mb-5">
                <h3 className="mt-5">About Usage</h3>
                <div className="contentBlock2">
                  <p>
                    {" "}
                    There’s a lot about the difference between straight hair
                    with bones and ordinary straight hair based on how they are
                    used, but we’ll focus on the two most important.
                  </p>
                  <p>
                    The first difference between straight and straight hair is
                    regular hair bleaching and curling. Bleaching on normal
                    straight hair is more accessible than on straight hair, and
                    hair care after bleaching is not easy either. Since normal
                    straight hair has not undergone any treatment, the cuticles
                    are still intact, and the hair is still healthy, so
                    bleaching becomes simpler. As mentioned before, it is not
                    recommended to use bone straightening hair because it is
                    very straight and smooth, making the hair straighten quickly
                    after curling. On the other hand, ordinary straight hair is
                    the ideal hairstyle for curling. This hair can be curled and
                    held for as long as natural hair.
                  </p>
                  <p>
                    The second difference between straight and straight hair is
                    their use on special occasions. Straight hair with bones is
                    the perfect hairstyle for luxury occasions and formal events
                    when you need an elegant and charismatic look. This
                    hairstyle will make you look intelligent, attractive, and
                    expensive. On the other hand, normal straight hair is for
                    everyday use, incredibly convenient, and still young and
                    beautiful. This hairstyle is suitable for outings with
                    friends, family, coffee dates, and picnics. This hairstyle
                    is for tours with friends, family, and coffee dates. ,
                    breeze, every day.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4 mt-3">
              <img src={Img3} alt="" />
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-8 mb-5">
              <h2>Where to order straight hair extensions?</h2>
              <p>
                Discover high-quality hair extensions at sunhaircompany.com.
                This drawn hair extensions distributor uses ideal virgin human
                hair packages, hair closure with an all-natural component, lace
                front wigs, human hair, and wholesale hair with an effective
                discount rate. Shipping worldwide from Vietnam! Thanks for
                reading, have a nice day!!!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Subcrice />
      <Footer />
    </div>
  );
}
