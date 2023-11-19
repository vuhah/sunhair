import * as React from "react";
import {Header1, Header2} from "../components/header";
import Footer from "../components/footer";
import Subcrice from "../layouts/subcribe";
import { Vector1, Vector2, Vector3, Vector4 } from "../images/blog";
import Img2 from "../images/blogdetail/blog10/10v2.jpg";
import Img4 from "../images/blogdetail/blog10/10v4.jpg";
import Img3 from "../images/blogdetail/blog10/10v3.jpg";
import Img5 from "../images/blogdetail/blog10/10v5.jpg";

export default function BlogDetail10() {
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
      <div className="container blockDetailPage10">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1>WHAT ARE WEFT HAIR EXTENSIONS, ANYWAY?</h1>
            <div className="p1">October 12 - Sun Nguyen</div>
            <div className="detailTitle">
              Weft hair extensions are created with real human hair which is
              sewn (either by hand or by machine) onto a horizontal strip, or
              “weft.” The stylists here at Autumn Markley Salon then “sew” these
              strips into the natural hair by attaching very small portions of
              the extension’s strands with small pieces of the natural strands
              and securing it with a bead at the roots.
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
            <h2 className="mt-5">1. Choose High Quality Hair</h2>
            <p>
              The process is fairly painless, and normally does not take more
              than an hour. Once the weft hair extensions are in place, they can
              last up to a year before being taken out. Although, depending on
              how quickly your hair grows, the extensions will need to be moved
              up every 6-8 weeks.
            </p>
            <p>
              Unlike other forms of extensions, weft hair extensions will keep
              the hair from tangling, saving you hours of time when styling and
              combing. The beads on the weft match your hair color and blend
              easily, while also keeping the extensions attached to your hair
              securely. The beads are silicone, made to protect both your hair
              as well as the extensions now in place.
            </p>
            <h2 className="mt-5">WEFT VS. OTHER TYPES OF EXTENSIONS</h2>
            <p>
              Weft hair extensions, when applied by our team of trained and
              talented professionals, is a gorgeous, painless, and
              natural-appearing option if you are looking to add volume and
              thickness to your mane (and let’s be honest, who isn’t?)
            </p>
            <p>
              But, if you’re on the fence, here are a few of our other favorite
              options for thickening those locks:
            </p>
            <h3 className="mt-5">Clip in extensions</h3>
            <p>
              Clip-in extensions are a temporary, easy-to-use, and fast option
              if you are looking to achieve longer and fuller hair without
              permanent results. They are easily fastened to the roots of
              strands, and can be closely matched and blended with the natural
              hair for a more voluminous and longer appearance.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-4 d-flex justify-content-center">
            <img src={Img2} alt="" className="rounded w-100" />
          </div>
          <div className="col-4">
            <p>
              All clip-in hair extensions come in one or multiple pieces, which
              are called wefts, that will vary in width. Extensions can be
              store-bought in your hair color, or dyed to better match your
              tone. They are then clipped onto the roots of hair in a matter of
              minutes for a finished and temporary look that has a similar
              appearance to permanent options.{" "}
            </p>

            <p>
              Pros: Clip in hair extensions are a great option if you are new to
              extensions and are not seeking a permanent option. They can be
              clipped in and out with ease, give a naturally fuller and longer
              appearance to hair, and are reusable.
            </p>
            <p>
              Cons: Clip in extensions can tug on the scalp and rip hair out if
              not applied correctly. Because of this, it is not recommended that
              they are worn often.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-8">
            <h3 className="mt-5">Tape-in hair extensions</h3>
            <p>
              Tape hair extensions are an option in which real hair is pre-taped
              together and then taped on to either side of your natural locks.
              While this option can be done in DIY style, typically you will
              want a professional to apply tape-ins for you, as they will need
              to be perfectly aligned with the roots of the natural hair, then
              applied with a heated tool so that the tape or glue heats up and
              attaches the strands together. Additionally, you would need to
              have them removed (with glue remover) and then reinstalled.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5 align-items-center">
          <div className="col-4">
            <p>
              Pros: Tape-in extensions are a great option if you are ready to
              commit to a specific hairstyle. They are considered
              “semi-permanent,” so they last around 8-10 weeks.{" "}
            </p>
            <p>
              Cons: As with any heat tools and products, the process of applying
              and removing tape-in hair extensions can cause damage to the hair.
            </p>
          </div>
          <div className="col-3 offset-1">
            <img src={Img3} alt="" className="w-100" />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-8">
            <h3 className="mt-5 mb-4">Sew-in extensions/weave</h3>
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-4">
            <img src={Img4} alt="" className="w-100" />
          </div>
          <div className="col-4 ">
            <p>
              Weave hair is applied by braiding the natural hair into cornrows
              first. After this, the hair extensions are then applied to the
              braided hair using a needle and thread. Due to the process of
              application, weave hair is not recommended for people with
              naturally thin hair. The application is an extremely long process
              (it can take up to four hours to complete), and can be fairly
              painful, as it is a tight and straining application method.
            </p>
            <p>
              Pros: Weave extensions are a great option if you are seeking a
              permanent solution for your hair extensions. Because it is sewn
              into your hair, the weave will stay in place until you choose to
              take it out.
            </p>
            <p>
              Cons: Due to the intense and straining application process, these
              extensions can be painful and damaging to the natural hair. It is
              not recommended on people with thin hair for this reason.{" "}
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-8 ">
            <h3 className="mt-5 mb-4">Fusion extensions</h3>
            <p>
              Fusion extensions are long-lasting (on average they can be kept in
              up to 4 months) with little damage to the natural hair. Fusion is
              often referred to as bond extensions. To achieve a naturally
              fuller and more voluminous appearance to hair, these extensions
              are tipped with a non-damaging Keratin bond. Then, hair is
              sectioned into pieces and the extension is bonded to the natural
              hair.
            </p>
            <p>
              Pros: Fusion extensions are a great option if you are ready to
              take the plunge and want a long-term result for fuller, more
              voluminous hair.
            </p>
            <p>
              Cons: Due to the time it takes for fusion hair extensions to be
              put in place, this type of hair extension is the most pricey, so
              be ready to budget for fusion extensions beforehand, and lay off
              the soy chai lattes for a few months.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-8">
            <h2 className="mt-5 mb-5">WHY CHOOSE WEFT? </h2>
            <p>
              There are many reasons to choose weft extensions over other
              options. Just in case you need a little more convincing, though,
              here are a few reasons we choose weft hair extensions over other
              options:
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-2 align-items-center">
          <div className="col-4">
            <p>
              Weft extensions can provide different levels of thickness. Beaded
              weft extensions can be chosen, cut, and styled to achieve your own
              specific desire of length and thickness. Then, our talented team
              of professional stylists will incorporate extensions that match
              both your current hair texture and a good compromise on the hair
              thickness you’re striving for.
            </p>
            <p>
              Weft hair extensions cause minimal damage to your natural hair.
              Are you worried that your new extensions will damage your
              gorgeous, natural locks? We hear ya. Don’t fret – this is not the
              case when it comes to weft extensions. Beaded weft extensions do
              not cause any damage to the natural hair it is sewn on to, and
              they are safe for using heat products and styling tools on. Our
              stylists are well trained on how to safely handle and apply the
              extensions to your hair to achieve your desired look with no
              damage or pain. Whether your hair is naturally fine or fuller, we
              will make sure you achieve your dream hair by the time you leave
              our salon.{" "}
            </p>
          </div>

          <div className="col-3 offset-1">
            <img src={Img5} alt="" className="w-100" />
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-8">
            <p>
              Try a new color or style without the long-term commitment. We love
              weft hair extensions because you can try out a new hairstyle
              without the commitment of a permanent cut or color. Heading to a
              music festival and feel like giving purple hair a try? No problem.
              Weft hair extensions provide no-commitment styling that won’t
              saturate your hair with dyes. This is a great option if you want
              to experiment with a new look, but aren’t totally ready to commit
              to a permanent change.{" "}
            </p>
            <p>
              Professionally applied extensions flawlessly match your hair. If
              you think weft hair extensions are the right choice for you, make
              sure you have them applied to your locks in a correct and safe
              manner.
            </p>
          </div>
        </div>
      </div>
      <Subcrice />
      <Footer />
    </div>
  );
}
