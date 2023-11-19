import * as React from "react";
import {Header1, Header2} from "../components/header";
import Footer from "../components/footer";
import Subcrice from "../layouts/subcribe";
import { Vector1, Vector2, Vector3, Vector4 } from "../images/blog";
import Img2 from "../images/blogdetail/blog4/4v2.jpg";
import Img3 from "../images/blogdetail/blog4/4v3.jpg";

export default function BlogDetail4() {
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
      <div className="container blockDetailPage4">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1>How To Choose A Wig For A Cancer Patient?</h1>
            <div className="p1">October 12 - Sun Nguyen</div>
            <div className="detailTitle">
              Before beginning radiation therapy, most cancer patients always
              select an appropriate wig to replace their natural hair for an
              extended period. Finding a wig might be challenging for some
              people since they don't know how to pick the proper hair color,
              length, or style. Now, read the essay below to make the best
              decision, or maybe the most beautiful and proudest option for you.
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
            <h2 className="mb-5">
              Prepare to shave your head before wearing a wig.{" "}
            </h2>
            <p>
              Many cancer patients are encountering hair loss or thinning, which
              is the potential side effect of undergoing treatments such as
              chemotherapy. Along with the concerns about their health
              situation, you are still confused about how to shave your head
              before wearing a wig. The obvious question is good preparation.
            </p>
            <p>
              First, you should have a barber who gets on well with you because
              some patients feel shy when exposing an unfamiliar One. You don't
              hope that a stranger is the first person to see their changed
              appearance.
              <p>
                Second, you must keep both before and during the shaving
                process. The hairdresser can unintentionally hurt your head's
                skin if your mind is unstable. Last but not least, you need to
                pay attention to barber tools. It would help if you used a men's
                clipper called zero, and it will give you a five-o'clock shadow.
                It's advised that a standard (non-electric) razor is a no-no,
                which can cause ingrown hairs and irritation. You ought to find
                a specific razor for shaving cancer's scalp.
              </p>
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-10 d-flex justify-content-center">
            <img src={Img2} alt="" className="rounded w-100" />
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-8">
            <h2 className="mb-4">Choose a wig to match your style.</h2>
            <p>
              The state of each cancer patient after chemotherapy is different,
              and it can be mild or more intense. However, hair loss is likely
              to last for a short time because hair gradually regrows. Until
              they can get back to their initial hair, they choose a wig as a
              temporary solution to make them feel comfortable. Selecting a wig
              seems problematic for those who have never tried wigs or hair
              extensions. Many concerns are related to its textures, sizes,
              colors, how it fits your head, how it feels, how it costs, and so
              on. Here are some tips to help you choose a suitable one.
            </p>
            <h3 className="mt-5">How to choose a perfect wig</h3>
            <p>
              However, we don’t recommend tape-in extensions for those who have
              a dry scalp. Tape-in adhesive strips are extremely sensitive to
              moisture. Therefore, if your head is deficient in smoke, tape-ins
              aren’t suitable. If you try to use them, you may suffer from hair
              breakage.
            </p>
            <p>
              Moreover, a vital thing you can't ignore is the kind of lace. Your
              scalp is quite sensitive after cancer treatments. Therefore, you
              should choose a high-quality lace that sticks to your head firmly.
            </p>
            <h3 className="mt-5">
              Consider synthetic wigs and human hair wigs.
            </h3>
            <p>
              Natural hair wigs are made from collected human hair. So they
              look, feel, and function like your natural hair. While synthetic
              wigs are produced from manufactured fibers probably makes you
              allergic. Although its design mimics the appearance of natural
              hair, it cannot be treated in the same manner as a human hair wig
              when it comes to styling.
            </p>
            <p>
              Natural hair wigs are made from collected human hair. So they
              look, feel, and function like your natural hair. While synthetic
              wigs are produced from manufactured fibers probably makes you
              allergic. Although its design mimics the appearance of natural
              hair, it cannot be treated in the same manner as a human hair wig
              when it comes to styling.
            </p>
            <p>
              To add, human hair wigs require much more maintenance and a high
              price. However, many wig buyers with a low budget favorably chose
              synthetic wigs with less care.{" "}
            </p>
            <h3 className="mt-5">Where to buy a wig for cancer patients</h3>
            <p>
              To help make the purchasing decision more accessible, why don't
              you visit a specialized wig shop? If the shop knows how to work
              with cancer patients, it will be willing to give you advice and
              assist you with the target of making you feel satisfied with your
              wig.
            </p>
            <p>
              Sun Hair Vietnam is proud to be a significant hair extension in
              Vietnam. We have experience dealing with hair-loss customers,
              especially cancer patients. Many people need our help when they
              feel depressed with their appearance after chemotherapy. Sun Hair
              Vietnam is honored to be your companion in a specially challenging
              stage. Our wigs come in a wide range of natural-looking styles and
              colors. We provide natural straight, bone straight, and various
              wavy, curly textures and natural black, ombre, piano, and other
              colors. Moreover, we can customize your requirements, so you need
              to contact us via Instagram or Whatsapp, where our staff will give
              you professional advice. In general, there are multiple choices to
              make sure your chosen wig is both comfortable and trimmed or
              accessorized.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-10 justify-content-center d-flex">
            <img src={Img3} alt="" className="rounded" />
          </div>
        </div>

        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-8 mb-5">
            <h3>Learn to wear and care for a wig</h3>
            <p>
              It is a fact that cancer can come along with lots of changes in
              both emotion and appearance. Nevertheless, if you choose and wear
              a wig correctly, your complexity doesn't suffer much. Some new wig
              wearers put it too far down on their face, while others wear it
              too tight. Wearing a wig is so simple. Here are the basic steps.
            </p>
            <p>Wear a wig cap if you need it.</p>
            <ul>
              <li>
                Pin it on your head by stretching it from the front to the back.
              </li>
              <li>
                Push the front of your wig cap back until it fits your natural
                hairline. Put on the wig.
              </li>
              <li>
                We are putting the wig, holding the ear points on the side of
                the cap construction with both hands, and setting the label at
                the top.
              </li>
              <li>
                Blend your head forward and put the front of the wig just above
                your eyebrows.
              </li>
              <li>
                Using the hooks inside the wig to fix it Cut the lace and glue
                it. (in case you use a wig with weft hair at the back)
              </li>
              <li>Slowly cut the lace right along the hairline.</li>
              <li>
                After setting the wig on your head, add glue or tape along your
                hairline.
              </li>
            </ul>

            <h3 className="mt-5">Be confident!</h3>
            <p>
              We sympathize with cancer patients' hardships after chemotherapy
              and hair loss. However, you always look on the bright side because
              this situation only occurs in a short time in your whole life.
              Sometimes it isn't worse than you thought. When you first wear a
              wig, it comes beyond your expectations. You become a new and
              attractive person. We're sure that everyone around will love your
              hairstyles and even ask you where to buy them. Everything will get
              better. Just smile and enjoy your life every second, every minute,
              and every day.
            </p>
          </div>
        </div>
      </div>
      <Subcrice />
      <Footer />
    </div>
  );
}
