import * as React from "react";
import {Header1, Header2} from "../components/header";
import Footer from "../components/footer";
import Subcrice from "../layouts/subcribe";
import Image2 from "../images/blogdetail/blog1/1v2.jpg";
import Image3 from "../images/blogdetail/blog1/1v3.jpg";
import { Vector1, Vector2, Vector3, Vector4 } from "../images/blog";

export default function BlogDetail1() {
  return (
    <div>
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

      <div className="container blockDetailPage1">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1>How To Distinguish Body Wave And Loose Wave Hair?</h1>
            <div className="p1">October 12 - Sun Nguyen</div>
            <div className="detailTitle">
              Nowadays, women have hundreds of hairstyles to wear on their
              heads. They come to hair extensions for various choices because
              women change their hairstyle at different events and occasions.
              Besides normal straight hair, curly and wavy hairstyles have
              become irresistible attractions to many women. Especially on the
              list, body and loose waves have conquered all women because of
              their natural curls. Every girl is confident in their sexy and
              charming movements. No one can say no to these hairstyles.
              However, many people find it challenging to tell loose and body
              waves apart. This blog will help you to find answers and get
              further information about each style.{" "}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="image "></div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-8">
            <div className="section1">
              <div className="titleHeading1">What is a body wave?</div>
              <div className="detailHeading1">
                <div className="detailContent1">
                  <p>
                    {" "}
                    As its name lets us know its characteristics, the body wave
                    is made in a resounding “s” pattern on the whole hair
                    bundle. It’s shiny and soft, so you can feel it naturally
                    when touching the hair bundle. Moreover, the body wave style
                    allows you to straighten or curl to achieve whatever look
                    you desire freely. Its function on your head is so good that
                    no one can realize you’re wearing hair extensions. Body wave
                    extensions are suitable for all women from different races
                    and backgrounds. Most women fall head over heels with this
                    style as hair extensions can blend perfectly with their
                    natural hair.
                  </p>

                  <p className="mt-2">
                    Compared to loose wave hair, body wave bears the character
                    of straight and curly locks whose curls have a more relaxed
                    appearance. Its versatility contributes to attracting lots
                    of women.
                  </p>
                  <p className="mt-2">
                    Body wave hair has always been the top priority for those
                    who love simple hairstyles. About advantages, this style has
                    flat strains and easy maintenance. You can bleach or dye
                    your hair bundle if you love dramatic colors without
                    shedding a lot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10">
            <img src={Image2} alt="" className="rounded"/>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-8">
            <div className="section2">
              <div className="titleHeading2">What is the loose wave?</div>
              <div className="detailHeading2">
                <div className="detailContent2">
                  <p>
                    Loose wave is considered incredibly wavier and curlier in
                    the wavy extensions world. In comparison with body waves, it
                    has smaller and tighter curls. It is its unique natural curl
                    that makes it become a women’s preference. Loose wave hair
                    doesn’t shed off, so it can bounce naturally when attached
                    to your head. Its thick and uncracked ends are also fluffier
                    than other hairstyles available on the market.
                  </p>
                  <p>
                    Thanks to its high quality and shiny characteristics, you
                    can color loose wave hair that doesn’t impact badly to its
                    defined curls. However, according to experts in hair beauty,
                    we shouldn’t bleach loose-wave hair. But loose wave hair is
                    so handy that you don’t use styling tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="section2">
              <div className="titleHeading2">
                What are the differences between body wave and loose wave
              </div>
              <div className="detailHeading2">
                <div className="detailContent2">
                  Both these two hairstyles rock all women with their 100%
                  virgin human hair materials without chemical treatments that
                  bring them glamorous wavy patterns.
                  <div className="stt">
                    <br></br>1. A body wave is less voluminous than a loose
                    wave. Therefore, women who love bouncy curls will be dying
                    for loose waves.
                    <br></br>2. In terms of strands, strands of body waves are
                    more closely designed with less bouncy than loose waves.
                    <br></br>3. Body wave is the best choice for those who like
                    soft curls.
                    <br></br>4. Some people prefer loose wave to body wave
                    because it is more versatile in styling and better to hold
                    the curls for long hours.
                    <br></br>5. If you’re a lover of straight hair, surely you
                    will not like loose wave hair due to its bigger curls.
                    <br></br>6. Body wave hair is easier to lose curl and turn
                    straight over time due to frequent washing than loose wave
                    hair.
                  </div>
                  <br></br>When our readers reach here, maybe some wonder what
                  hairstyle suits them. The answer comes from your experience,
                  just trying them because each has pros and cons. Despite their
                  differences in style and other minor aspects, both help add
                  value to your natural hair. Sometimes, it depends on events or
                  occasions to choose which type. It’s up to you as long as you
                  feel confident wearing it. If you have appropriate care, curly
                  hair extensions can keep a good shape.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-10 d-flex justify-content-center">
            <img src={Image3} alt="" className="rounded"/>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-8">
            <div className="section3">
              <div className="titleHeading3">
                Body wave and loose wave hair at Sun Hair
              </div>
              <div className="detailHeading3">
                <div className="detailContent3">
                  With their outstanding characteristics, loose wave and body
                  wave hair are famous among every charming lady in the beauty
                  world. For many women, the first thing to do after waking up
                  is to care for and style their hair. However, styling your
                  natural hair in loose or body wave hairstyles every morning
                  wastes much time. Even though you can’t reach the curls that
                  you desire. Therefore, loose wave and body wave hair
                  extensions are the best choices. But where to buy beautiful
                  hair without shedding and tangling?
                  <br></br>Sun Hair is honored to provide you with a loose wave
                  and body wave featuring 100% virgin human hair and various
                  colors.
                </div>
                <div className="blockContent3">
                  <div className="titleBlock3">Our loose wave</div>
                  <div className="contentBlock3">
                    The hair has small and tight curls, but it’s not too tight
                    <ul className="a">
                      <li>
                        Made from high-quality virgin hair, loose wave bundles
                        have a high luster and perfect shine{" "}
                      </li>
                      <li>You can color in any tone </li>
                      <li>
                        We don’t need tools to style because our workers make
                        perfect defined curls that are hard to loosen
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blockContent3">
                  <div className="titleBlock3">Our body wave </div>
                  <div className="contentBlock3">
                    Flat strains designed from virgin-luxurious hair
                    <ul className="a">
                      <li>
                        The hair is a must-try for those who prefer to take the
                        straightforward route with hair
                      </li>
                      <li>
                        It can keep its curls for a very long time if you take
                        care of it well.{" "}
                      </li>
                      <li>It’s easy to maintain and wash</li>
                      <li>
                        The hair is very natural without shedding and tangling{" "}
                      </li>
                      <li>
                        Coloring and bleaching are allowed, but you should
                        minimize them to protect your hair{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className=" detailContent3 detail3">
                  Sun Hair guarantees that we always sell good quality hair in a
                  wide range of styles, textures, and colors that fit your
                  budget. Don’t hesitate to contact us to get further
                  information right now.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subcrice />
      <Footer />
    </div>
  );
}
