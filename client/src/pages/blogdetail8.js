import * as React from "react";
import {Header1, Header2} from "../components/header";
import Footer from "../components/footer";
import Subcrice from "../layouts/subcribe";
import { Vector1, Vector2, Vector3, Vector4 } from "../images/blog";
import Img2 from "../images/blogdetail/blog8/8v2.jpg";
import Img3 from "../images/blogdetail/blog8/8v3.jpg";

export default function BlogDetail8() {
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
      <div className="container blockDetailPage8">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1>Which are Vitamin hair growth need?</h1>
            <div className="p1">October 12 - Sun Nguyen</div>
            <div className="detailTitle">
              While genetics play a key role, your diet, the weather, pollution,
              and your overall approach to hair care are all critical to
              maintaining your crowning glory. Find out how a healthy diet and
              proper care can keep your mane a head above the rest.
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
            <h2>1. Pump up the protein</h2>
            <p>
              Hair loss or thinning hair can be caused by a variety of
              culprits—including nutrition deficiencies. So while vitamins and
              supplements are not a miracle cure by any means, the right ones
              just might make a difference in the way your hair looks and feels.
            </p>
            <ul>
              <li>- lean meat</li>
              <li>- poultry</li>
              <li>- fish</li>
              <li>- beans</li>
              <li>- low-fat dairy products</li>
              <li>- eggs</li>
            </ul>
            <p>
              Diets with inadequate protein can result in weak, brittle hair and
              loss of hair color, as well as loss of hair itself.
            </p>
            <h2 className="mt-5">2. Zinc about it </h2>
            <p>
              Zinc deficiency can cause hair to shed. Incorporate nuts like
              Brazil nuts, walnuts, pecans, cashews, and almonds into your diet
              to combat shedding.
            </p>
            <p>Eat and drink an abundance of:</p>
            <ul>
              <li>- vegetables</li>
              <li>- fruits</li>
              <li>- leafy green salads</li>
              <li>- plenty of clean, filtered water</li>
            </ul>
            <p>
              A multivitamin or zinc supplements can enhance your diet when
              necessary.
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
            <h2 className="mt-5">3. Omega your hair nice</h2>
            <p>
              Increasing your intake of omega-3 fatty acids may stimulate your
              hair follicles and sebaceous glands. While this won’t cause your
              hair to grow, it may improve scalp health.
            </p>
            <p>
              Omega-3 fatty acids are found in cold-water fish, such as salmon,
              sardines, and herring. Other good sources include:
            </p>
            <ul>
              <li>- flax seed</li>
              <li>- yogurt</li>
              <li>- cottage cheese</li>
              <li>- salad</li>
              <li>- cereal</li>
            </ul>
            <h2 className="mt-5">4. Know thy hair</h2>
            <p>
              There are conflicting opinions about how often to shampoo your
              hair. It all comes down to personal preference and individual
              needs, which depend on:
            </p>
            <ul>
              <li>- your hair type and texture</li>
              <li>- how often you use hair products</li>
              <li>- your activity level</li>
            </ul>
            <p>
              For example, people with oily hair may need to shampoo every day,
              while people with dry hair may need to shampoo less frequently.
            </p>
            <h2 className="mt-5">5. Choose the right shampoo</h2>
            <p>
              Using the wrong shampoo and styling agent can cause significant
              hair damage. Look for products that are right for your hair type —
              oily, normal, or dry — and target any problems you have, such as
              dandruff.
            </p>
            <p>
              Try to avoid shampoos with harsh ingredients, such as ammonium
              lauryl sulfate or sodium lauryl sulfate. And remember, cost
              doesn’t necessarily indicate the quality of a product.
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
            <h2 className="mt-5">6. Get condition-specific</h2>
            <p>
              Conditioning after shampooing is an important step in keeping your
              hair soft, shiny, and manageable. You can choose a separate
              conditioner or a shampoo with built-in conditioner.
            </p>

            <p>
              Comb conditioner through for even distribution. Leave it in your
              hair for two to three minutes before rinsing out.
            </p>

            <p>
              Just like hair washing, not everyone needs to condition every time
              they wash their hair. Experiment to find what works best for you.
            </p>

            <h2 className="mt-5">7. Wash up and brush up</h2>
            <p>
              Experts suggest that many people over-shampoo or shampoo
              incorrectly. The standard rules of thumb are:
            </p>
            <ul>
              <li>- Don’t wash your hair more than once a day.</li>
              <li>- Use only enough of the product to cover your hair.</li>
              <li>- Avoid using very hot or very cold water.</li>
            </ul>
            <p>
              Treat hair gently when it’s wet — it’s three times more vulnerable
              to breakage. Don’t rub wet hair excessively with a towel. Use a
              wide-tooth comb to detangle, but don’t comb too much or brush wet
              hair.
            </p>
            <h2 className="mt-5">8. Hair maintenance tips</h2>
            <p>Keep these tips in mind for healthy locks:</p>
            <ul>
              <li>
                - Start off on the lowest heat setting while blow drying and
                gradually increase heat as needed.
              </li>
              <li>- Allow your hair to air dry whenever possible.</li>
              <li>
                - Change up where you place pins and clips so that breakage
                isn’t localized.
              </li>
              <li>
                - If you dye your hair, choose a shade that’s within three
                shades of your natural color.
              </li>
              <li>
                - Massage your scalp often to promote hair growth and increase
                blood circulation.
              </li>
              <li>
                - Get your hair cut regularly — every 10 to 12 weeks — to keep
                hair healthy and prevent split ends.
              </li>
            </ul>

            <h2 className="mt-5">9. Cut it out</h2>
            <p>
              Harsh shampoo, hair treatments, styling products, and excessive
              brushing contribute the most to poor hair health. However, other
              culprits include:
            </p>
            <ul>
              <li>- overconsumption of alcohol</li>
              <li>- low-calorie and crash diets</li>
              <li>- decreased thyroid hormone</li>
              <li>- excessive stress</li>
              <li>- blood thinners</li>
              <li>
                - some prescription drugs for heart problems, depression, high
                blood pressure, and arthritis
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Subcrice />
      <Footer />
    </div>
  );
}
