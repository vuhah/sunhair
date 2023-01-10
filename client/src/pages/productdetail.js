import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axiosInstance from "../config/axiosConfig";
import TopEvent from "../components/topEvent";
import categoryMap from "../constant/categoryCode";
import { CartIcon } from "../components/cart";
import { Checked, LogoRemoveBg1 } from "../images/common";
import { addProduct } from "../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import CardProps from "../components/card";

export default function ProductDetail() {
  const id = useParams().productID;
  const [data, setData] = useState({
    available: true,
    category: "",
    definition: "",
    characteristics: "",
    images: [],
    information: "",
    instructionManual: "",
    name: "",
    selling: "",
  });
  const [weight, setWeight] = useState(100);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const relatedProduct = useSelector(
    (state) => state.product.initialProducts
  ).filter((ele) => ele.category === data.category);

  useEffect(() => {
    async function getProduct() {
      try {
        const data = { id: id };
        const res = await axiosInstance({
          url: "product/getProduct/",
          method: "POST",
          data: data,
        });
        console.log(res.data.data);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProduct();
  }, []);

  function handleAddItems(e) {
    e.preventDefault();
    dispatch(
      addProduct({
        productID: id,
        weight: weight,
        thumbnail: data.images[0],
        name: data.name,
        category: data.category,
      })
    );
  }

  function handleBuyNow(e) {
    e.preventDefault();
    dispatch(
      addProduct({
        productID: id,
        weight: weight,
        thumbnail: data.images[0],
        name: data.name,
        category: data.category,
      })
    );
    navigate("/order");
  }

  return (
    <div className="productdetail">
      <TopEvent className="topevent" />
      <Header className="header" />
      <div className="container content">
        <div className="row align-items-center justify-content-between">
          <div className="col-6 path">
            <span>HOME / {categoryMap.get(data.category)} /</span>
            <span className="name"> {data.name.toUpperCase()}</span>
          </div>
          <div className="col-6">
            <Link to="/order" className="float-end">
              <CartIcon />
            </Link>
          </div>
        </div>

        <div className="row product">
          <div className="col-5 nameintro">
            <div
              class="nameintromini pt-3"
              style={{ backgroundImage: `url(${LogoRemoveBg1})` }}
            >
              <h1 className="name">{data.name.toUpperCase()}</h1>
              {/* <p className="information mt-5">{data.information}</p> */}
              {data.information.split("</n>").map((ele, index) => (
                <p key={index} className="contentsection mt-3">
                  {ele}
                </p>
              ))}

              <div className="weight d-flex align-items-center mt-5">
                <p className="askweight 5">
                  How many grams do you want to buy?
                </p>
                <div
                  onClick={(e) => setWeight((prev) => prev - 100)}
                  className="ms-5 decrease d-flex align-items-center justify-content-center"
                >
                  -
                </div>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="ps-4 currentweight "
                />
                <div
                  onClick={(e) => setWeight((prev) => prev + 100)}
                  className="increase d-flex align-items-center justify-content-center"
                >
                  +
                </div>
              </div>
              <div className="button d-flex justify-content-between">
                <button className="buynow" onClick={(e) => handleBuyNow(e)}>
                  <p>BUY NOW</p>
                </button>
                <button
                  className="addtocart ms-5"
                  onClick={(e) => handleAddItems(e)}
                >
                  <p>ADD TO CART</p>
                </button>
              </div>
            </div>
          </div>

          <div className="col-5 offset-1 image">
            <div className="float-center">
              {data.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt=""
                    className="largeimage mt-1 mb-1"
                    id={index}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-1 listminiimage">
            <div className="float-end">
              {data.images.map((image, index) => (
                <div key={index}>
                  <a href={`#${index}`}>
                    <img src={image} alt="" className="miniimage mt-1 mb-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row inforcontent ">
          <div className="col-9">
            <div className="definition">
              <h2 className="titlesection">What is Vietnamese {data.name} ?</h2>
              {/* <p className="contentsection mt-3">{data.definition}</p> */}
              {data.definition.split('</n>').map((ele, index) => (
                  <p key={index} className="contentsection mt-3">
                    {ele}
                  </p>
                ))}
            </div>
            <div className="characteristics mt-5">
              <h2 className="titlesection">Chracteristics of {data.name} ?</h2>
              <div className="mt-3">
                {data.characteristics.split("/n").map((ele, index) => (
                  <p key={index} className="contentsection mt-3">
                    {ele}
                  </p>
                ))}
              </div>
            </div>

            <div className="instruction mt-5">
              <h2 className="titlesection">INSTRUCTION MANUAL</h2>
              <div className="mt-3">
                {data.instructionManual.split("- ").map((ele, index) =>
                  index === 0 ? (
                    <p key={index} className="contentsection mt-3 fw-bolder">
                      {ele}
                    </p>
                  ) : (
                    <div className="d-flex align-items-center mt-3">
                      <img src={Checked} alt="" className="check" />
                      <p className=" contentsection ms-2">{ele}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="instruction mt-5">
              <h2 className="titlesection">SHIPPING & RETURNS</h2>
              <div className="mt-3">
                <p className=" contentsection mt-2">
                  Quick Priority Shipping by DHL, UPS, Fedex.
                </p>
                <p className=" contentsection mt-2">
                  Arrives in 3 to 7 days to all over the world.
                </p>
                <p className=" contentsection mt-2">
                  Customer’s payment will be refunded through Onepay
                  (Mastercard/Visa Card) or Bank accounts if products are faulty
                  (badly damaged, incorrect textures with confirmation before
                  shipping, etc) by our company.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 ps-5 d-flex justify-content-around">
            <div className="break"></div>
            <div className="related ps-3">
              <h2 className="titlesection">Related Products</h2>
              <div className="relatedproduct d-flex flex-column mt-4">
                {relatedProduct.map((ele, index) => (
                  <div className="cardrelated" key={index}>
                    {index >= 3 ? (
                      <></>
                    ) : (
                      <CardProps
                        className="card"
                        id={ele.id}
                        name={ele.name}
                        category={categoryMap.get(ele.category)}
                        src={ele.images}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
