import * as React from "react";
import {Header1, Header2} from "../components/header";
import Footer from "../components/footer";
import Subcrice from "../layouts/subcribe";
import { Vector1, Vector2, Vector3, Vector4 } from "../images/blog";
import Img2 from "../images/blogdetail/blog3/3v2.jpg";
import Img3 from "../images/blogdetail/blog3/3v3.jpg";

export default function BlogDetail3() {
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
      <div className="container blockDetailPage3">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1>Tape-in Extensions: Why I Should Buy Them? </h1>
            <div className="p1">October 12 - Sun Nguyen</div>
            <div className="detailTitle">
              In the last decades, we have witnessed ingenious hair trends
              thanks to the wizard of modern technology. One of the most favored
              hair extension methods on the list is tape-ins. Due to its easy
              and quick installation, a tape-in extension has undoubtedly become
              a must-have item for all ladies worldwide. Despite its popularity,
              not all of us have a deep understanding of this unique method. In
              today’s blog, we will provide our beloved readers with some
              in-depth information on tape-in extensions. After reading this
              article, you’ll grab reasons why you should purchase tape-ins to
              make beauty.
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
            <h2 className="mb-5">What are tape-in extensions?</h2>
            <p>
              Tape-in extensions have come to light with many other names such
              as tape hair, tape-on, and tape hair extensions. Although you call
              it by any above name, call them to refer to the method, which uses
              1-inch wide wefts covered at the top with a paper tab to attach to
              the hairline. The adhesive tape is a soft medical glue that has no
              harm to your scalp. You can easily apply it by peeling the tab
              away.{" "}
            </p>
            <p>
              Tape-in extensions are available in multiple textures, colors, and
              lengths. This permanent hair extension can improve your hair’s
              length, volume, and natural beauty. They match your coat perfectly
              without being noticed.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-10 d-flex justify-content-center">
            <img src={Img2} alt="" className="rounded" />
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-8">
            <h2 className="mb-4">Who are tape-in extensions used for?</h2>
            <p>
              Most hairstylists and experts in the hair extensions market agree
              that tape-ins have conquered everybody’s hearts. Especially if you
              own weaker hair that is thin and fragile, a tape-on is the best
              choice for you because it’s a gentle attachment.
            </p>
            <p>
              However, we don’t recommend tape-in extensions for those who have
              a dry scalp. Tape-in adhesive strips are extremely sensitive to
              moisture. Therefore, if your head is deficient in smoke, tape-ins
              aren’t suitable. If you try to use them, you may suffer from hair
              breakage.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-8">
            <h2 className=" mt-5 mb-4">
              What are the advantages of tape-in extensions?
            </h2>
            <h3>Natural-looking effects</h3>
            <p>
              When you wear tape-in extensions, no one can realize their
              existence. People know that you have become more gorgeous and make
              compliments. Tape-ins are invisible, soft, and thin with a
              discreet attachment.
            </p>

            <ul className="mt-4">
              <li>
                1. Don’t harm your hair.
                <p>
                  Tape-in extensions won’t feel heavy or slide off due to their
                  2-3 gram weight. If someone worries about her fragile and
                  damaged hair, forget it because tape-ins have a perfect
                  function.
                </p>
              </li>

              <li>
                2. Easy to remove.
                <p>
                  Nowadays, we can use a special remover; removing the
                  extensions is a piece of cake.
                </p>
              </li>

              <li>
                3. Easy to reuse.
                <p>
                  Don’t throw tape-in extensions away when it’s time to remove
                  it. It’s a good idea to purchase refill tapes to reuse them.
                  This method both protects the environment and saves your
                  budget.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center mt-4 mb-4">
          <div className="col-10 d-flex justify-content-center">
            <img src={Img3} alt="" className="rounded" />
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-8 mb-5">
            <h2 className="mb-4">Where can I buy tape-in extensions?</h2>
            <p>
              Tape-in extensions have come in various styles, colors and
              textures, so choosing them makes you stressed. Many hair experts
              advise customers to visit a hair salon or consult a hairstylist.
              Another quick way is to visit our website Sun Hair Vietnam where
              you can find multiple products and contact us on social networks
              such as Instagram, Facebook, etc. Our staff is always willing to
              give you the best support until it can meet your demands.{" "}
            </p>
          </div>
        </div>
      </div>
      <Subcrice />
      <Footer />
    </div>
  );
}
