import * as React from "react";
import {Header1, Header2} from "../components/header";
import Footer from "../components/footer";
import Subcrice from "../layouts/subcribe";
import { Vector1, Vector2, Vector3, Vector4 } from "../images/blog";
import Img2 from "../images/blogdetail/blog6/6v2.jpg";
import Img4 from "../images/blogdetail/blog6/6v4.jpg";
import Img3 from "../images/blogdetail/blog6/6v3.jpg";

export default function BlogDetail6() {
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
      <div className="container blockDetailPage6">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1>Which are Vitamin hair growth need?</h1>
            <div className="p1">October 12 - Sun Nguyen</div>
            <div className="detailTitle">
              Vitamins and supplements that promise hair growth almost sound too
              good to be true. Can taking a pill once or twice a day really make
              your hair longer, stronger and healthier?
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
              Hair loss or thinning hair can be caused by a variety of
              culprits—including nutrition deficiencies. So while vitamins and
              supplements are not a miracle cure by any means, the right ones
              just might make a difference in the way your hair looks and feels.
            </p>
            <p>
              Here’s a look at the best vitamins for hair growth, and a few
              supplements experts recommend.{" "}
            </p>
            <h2 className="mt-5">
              What Types of Vitamins Help With Hair Growth?
            </h2>
            <p>
              Hair growth and healthiness are influenced by a number of factors,
              including nutrition, genetics, medical conditions, hormones and
              even stress. Research finds that a deficiency in vitamins and
              minerals important for normal cell growth and function may
              contribute to hair loss.
            </p>
            <p>
              “Vitamins are essential for healthy hair growth and may help in
              preventing hair shedding and thinning,” says Michele Green, M.D.,
              a cosmetic dermatologist in New York. “The best vitamins for hair
              growth include B vitamins, vitamin D, vitamin E, zinc, biotin and
              iron.
            </p>
            <h3 className="mt-5">Vitamin B</h3>
            <p>
              Complex B vitamins play a role in hair growth, and are “essential
              for metabolism and nervous system function,” says Dr. Green. “It
              is no wonder that B vitamins like vitamin B7 (biotin) and B12 are
              important to strengthen and condition the hair.”
            </p>
            <p>
              Research shows you can easily reach the daily allowances of B
              vitamins by eating a balanced diet. B vitamins can be found in a
              variety of foods, including 100% whole grains, meat, fish, whole
              eggs, nuts and avocados.
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
            <h3 className="mt-5">Biotin</h3>
            <p>
              Biotin, also known as vitamin B7, is a complex B vitamin that is
              often touted for having hair growth benefits. And some of that
              hype may actually be worth it. Biotin has functions in “creating
              red blood cells, which carry oxygen and nutrients to the scalp and
              hair follicles,” says Dr. Green. It also “plays a role in keratin
              production, which is a main component of hair.”
            </p>
            <p>
              Most people receive enough biotin from the foods they eat, notes
              the National Institutes of Health. The best way to get more is to
              eat biotin-rich foods. Dr. Green recommends milk, eggs, bananas,
              salmon, sweet potatoes and almonds. If you do feel you need an
              extra boost, talk to your doctor—supplement labels reveal that
              many biotin supplements for hair, skin and nails far exceed the
              recommended daily amount.
            </p>
            <h3 className="mt-5">Vitamin C</h3>
            <p>
              Vitamin C isn’t only good for maintaining immunity, it may also
              make hair stronger. Dr. Green notes that as a powerful
              antioxidant, vitamin C is essential for healthy hair growth.
              “Vitamin C helps increase blood circulation throughout your body,
              including your scalp,” she says. “When there is increased blood
              circulation to your scalp, there is greater stimulation of your
              hair follicles, which may help promote hair growth.”
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-10 justify-content-center d-flex">
            <img src={Img4} alt="" className="rounded" />
          </div>
        </div>

        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-8 mb-5">
            <h3 className="mt-5">Iron</h3>
            <p>
              Iron plays a surprisingly important role in hair growth, too, and
              research in the Journal of Korean Medical Science suggests a link
              between iron deficiencies and hair loss among women. This
              micronutrient boosts circulation and helps move oxygen to your
              cells more efficiently, explains Dr. Green, which may aid in hair
              growth. “If you do not get enough iron, your body cannot produce
              sufficient hemoglobin, which will falter oxygen delivery to your
              scalp and contribute to hair loss,” she says.
            </p>

            <p>
              She recommends eating foods high in iron, such as clams, red meat,
              spinach and lentils. An iron supplement may also be worth adding
              to your routine if you are at risk of iron deficiency, but check
              with your doctor first.
            </p>

            <h3 className="mt-5">Keratin</h3>
            <p>
              Keratin is a protein that makes up our hair, skin and nails, notes
              Dr. Green. It’s naturally produced by the body, and there are many
              keratin supplements out there that claim to help with hair growth.
              However, Dr. Green suggests “supplementing” with keratin in a more
              natural way—by eating protein-rich foods like eggs, beans, fish
              and meats—rather than taking a pill. “There are no reliable
              studies that show keratin helps with hair growth,” she says.
              “Additionally, over-supplementing keratin can be harmful due to
              excess protein buildup in the body.”
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-10 justify-content-center d-flex">
            <img src={Img3}  alt="" className="rounded" />
          </div>
        </div>

        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-8 mb-5">
            <h3>Vitamin D</h3>
            <p>
              A deficiency in vitamin D may result in hair loss, according to
              Dr. Green. “Vitamin D is metabolized in the skin by keratinocytes,
              skin cells that produce keratin,” she says. “When the body does
              not have enough vitamin D, the keratinocytes in hair follicles
              have trouble facilitating hair growth, resulting in shedding and
              hair loss.”
            </p>

            <p>
              Zinc is a trace mineral and only needed by the body in small
              amounts. It’s small but mighty, and plays a role in everything
              from the growth of cells to creating DNA. “Low levels of zinc have
              been associated with hair loss and poor wound healing,” says Dr.
              Green. She recommends eating zinc-rich foods, like meat, beans,
              nuts and seeds.
            </p>

            <p>
              If you struggle with hair loss or hair thinning, it also might be
              worth talking to your doctor about whether a zinc supplement could
              be right for you. One small study found that zinc supplementation
              should be given to alopecia patients who have a low serum zinc
              level.
            </p>

            <h3 className="mt">Vitamin A</h3>
            <p>
              Keratin is a protein that makes up our hair, skin and nails, notes
              Dr. Green. It’s naturally produced by the body, and there are many
              keratin supplements out there that claim to help with hair growth.
              However, Dr. Green suggests “supplementing” with keratin in a more
              natural way—by eating protein-rich foods like eggs, beans, fish
              and meats—rather than taking a pill. “There are no reliable
              studies that show keratin helps with hair growth,” she says.
              “Additionally, over-supplementing keratin can be harmful due to
              excess protein buildup in the body.”
            </p>
          </div>
        </div>
      </div>
      <Subcrice />
      <Footer />
    </div>
  );
}
