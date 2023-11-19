import * as React from "react";
import {Header1, Header2} from "../components/header";
import Footer from "../components/footer";
import Subcrice from "../layouts/subcribe";
import { Vector1, Vector2, Vector3, Vector4 } from "../images/blog";
import Img2 from "../images/blogdetail/blog9/9v2.jpg";
import Img4 from "../images/blogdetail/blog6/6v4.jpg";
import Img3 from "../images/blogdetail/blog6/6v3.jpg";

export default function BlogDetail9() {
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
      <div className="container blockDetailPage9">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1>Some Tips About Hair Extensions</h1>
            <div className="p1">October 12 - Sun Nguyen</div>
            {/* <div className="detailTitle">
              Vitamins and supplements that promise hair growth almost sound too
              good to be true. Can taking a pill once or twice a day really make
              your hair longer, stronger and healthier?
            </div> */}
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10">
            <div className="image"></div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-8">
            <h2 className="mt-5">1. Choose High Quality Hair</h2>
            <p>
              No matter how carefully you look after your new hair extensions,
              they’ll only ever be as good as the hair itself.
            </p>
            <p>
              At Bond Hair we recommend you opt for the best quality hair you
              within your budget, it’s true what they say – you get what you pay
              for, and hair extensions are no exception to this wise rule.
            </p>
            <p>
              If you don’t know where to start then we can advise you on hair
              types, we offer a range of options to suit every budget and it
              goes without saying the best hair costs a little more – that said,
              taking a long-term view there’s not as much in the price as you’d
              think.
            </p>
            <p>
              For example, our Vietnamese hairs can be reused/reapplied several
              times. You pay a little more up-front but the cost comes down for
              subsequent uses.
            </p>
            <h2 className="mt-5">2. Retain Moisture in your Hair Extensions</h2>
            <p>
              The most important factor in keeping human hair healthy is
              moisture, as this keeps hair strong. If hair loses moisture, the
              strands will swell, losing strength and flexibility and will
              break.
            </p>
            <p>
              As hair extensions are not gaining the nutrients and oils your
              natural hair would, you need to give them a helping hand. It goes
              without saying that bleached/blond hair extensions tend to become
              more dry than brunette and dark hair, so blonde extensions will
              require a little added TLC.
            </p>
            <p>
              Many factors affect the moisture content in hair such as diet,
              chemical treatments and air humidity. For example, whilst
              shampooing, conditioning and towel drying, hair will be stroked in
              different directions which can cause strands to weaken and break.
              Combining hair can stretch the strands and also cause breakage.
              Hair extensions are at risk of this damage: because Sun Hair only
              uses human hair, the extensions will behave just like your own
              hair.
            </p>
            <p>
              Research has taught us that hair is negatively charged and
              shampoos are designed to have a negative charge as well, so that
              they will not be absorbed. Conditioner is designed to encourage
              the absorption of moisture, whilst not leaving any residue behind
              to cause a greasy finish. Good conditioners will reduce friction
              between strands of hair, resulting in stronger, smoother looking
              hair. Conditioners should not be used on the bonds/roots of hair.
            </p>

            <h2 className="mt-5">
              3. Don’t Over or Under Wash Your Hair Extensions
            </h2>
            <p>
              Whilst ensuring moisture if put into the lengths of the hair
              through a weekly conditioning mask or treatment, we don’t
              recommend that the bonds/root of your hair is exposed to too much
              moisture. This means don’t over wash it – avoid daily hair washes,
              but don’t let the roots become greasy. Too much moisture at the
              root can cause keratin bonds to soften and this can cause shedding
              of the hair or loss of bonds.
            </p>
            <p>
              Everyone’s hair is different so judge your own hair. If it feels
              greasy after 2 days then wash it. For most we recommend washing
              hair extensions 2-3 times per week.
            </p>
            <h2 className="mt-5">
              4. Brush Hair Extensions Regularly & Tie Hair Up to Sleep
            </h2>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-4 d-flex justify-content-center">
            <img src={Img2} alt="" className="rounded w-100" />
          </div>
          <div className="col-4">
            <p>Brushing Your Hair Extensions</p>
            <p>
              Many people are scared to touch or brush their new hair
              extensions, which leads to more harm than good. Regular brushing
              is good for the hair as it encourages natural shedding and ensures
              no matting occurs at the root area housing the keratin bonds.
            </p>
            <p>
              Some can’t stop touching and brushing their new Rapunzel-style
              locks, so don’t go overboard.
            </p>
            <p>
              Brushing your extensions several times a day, including morning
              and night is recommended.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-8">
            <h2 className="mt-5">5. Don’t let bonds stick together</h2>
            <p>
              In addition to brushing, and probably THE MOST IMPORTANT THING I
              can tell you in regard to hair extensions aftercare is this:
            </p>
            <p>
              Ensure your bonds are separated (not sticking/matting together) at
              all times.
            </p>
            <p>
              Your bonds should remain separated one day, one week, one month
              and three months after they were fitted, they should not stick
              together.
            </p>
            <p>
              I tell my clients to run their fingers through their new hair on
              day one, get a partner, mum, sister, brother or friend to look and
              feel them also. Then use this person to regularly check your bonds
              for you (fi you can’t be trusted to do so yourself). Ensure they
              feel the same – entirely separated) at all times. You should be
              able to count each individual bond if you had to.
            </p>
            <p>
              If, at any stage you think your pre-bonded hair extensions are
              sticking together or matting into a dreadlock or clump (they
              shouldn’t do), then be sure to contact you stylist immediately for
              a check up (see pint 5).
            </p>
            <p>
              Do not leave it to get worse. I’ve been doing hair extensions over
              11 years now and have seen a handful of serious cases of matting –
              it’s purely down to poor aftercare by the client and is rare.
            </p>
            <p>
              Whilst it won’t necessarily ruin your natural hair, it will most
              certainly end up in an appointment spanning several hours with
              your stylist detangling a matted mess of a head with you shouting
              ‘ouch’ at regular intervals – don’t do it!
            </p>
            <p>
              I offer free advice and check-up via Phone/ WhatsApp or
              face-to-face appointments, even if you’ve had your extensions done
              elsewhere and need help or advice if something’s gone wrong.
            </p>
          </div>
        </div>
      </div>
      <Subcrice />
      <Footer />
    </div>
  );
}
