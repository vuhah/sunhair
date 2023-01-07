import { useSelector, useDispatch } from "react-redux";
import { WeightIcon, Check, Bag } from "../images/order";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { setProducts } from "../redux/cartSlice";

function sumOfWeight(cart) {
  let sum = 0;
  for (const i of cart) {
    if (i.selected) {
      sum = sum + i.weight;
    }
  }
  return sum;
}

export default function Summary({setStep}) {
  const cart = useSelector((state) => state.cart.productsadded);
  const dispatch = useDispatch()

  const [temporaryCart, setTemproryCart] = useState(
    cart.map((item) => Object.assign({}, item, { selected: true }))
  );
  const totalItems = temporaryCart.filter(
    (ele) => ele.selected === true
  ).length;

  const totalWeight = sumOfWeight(temporaryCart);

  const [overallCheck, setOverallCheck] = useState(true);

  function handleCheckOutItem(e, id) {
    e.preventDefault();
    const objIndex = temporaryCart.findIndex((ele) => ele.productID === id);
    console.log(temporaryCart);
    console.log(objIndex);
    const newarr = [...temporaryCart];
    newarr[objIndex].selected = !newarr[objIndex].selected;
    setTemproryCart(newarr);
  }

  function handleCheckOutItems(e) {
    e.preventDefault();
    setOverallCheck((prev) => !prev);
    setTemproryCart((prev) =>
      prev.map((ele) =>
        overallCheck
          ? Object.assign({}, ele, { selected: false })
          : Object.assign({}, ele, { selected: true })
      )
    );
  }

  function handleNextPhase(e){
    e.preventDefault()
    const newCart = temporaryCart.filter(ele => ele.selected === true)
    newCart.forEach(ele => delete ele.selected)
    dispatch(setProducts({products: newCart}))
    setStep(1)
  }

  return (
    <AnimationOnScroll animateIn="animate__backInLeft" className="container">
      <div className="row justify-content-between header align-items-center">
        <div className="col-4 ms-5">
          <Link to="/product" className="d-flex align-items-center text-black">
            <span className="backShopping">Continue Shopping</span>
            <img className="bag" src={Bag} alt="" />
          </Link>
        </div>
        <div className="col-4 pe-5"></div>
      </div>

      <div className="summary">
        <h1>Summary Orders</h1>
        <p className="">Check your items and its weight</p>
      </div>

      <div className="row justify-content-center">
        <div>
          <div className="container-fluid ordertable pt-3 ps-4 pe-4">
            <div className="row header align-items-center pb-3">
              <div className="col-1">
                <div
                  className="check-item "
                  style={
                    overallCheck
                      ? {
                          backgroundImage: `url(${Check})`,
                        }
                      : {}
                  }
                  onClick={(e) => handleCheckOutItems(e)}
                ></div>
              </div>
              <div className="col-7 offset-2">
                <h1>Item</h1>
              </div>
              <div className="col-2 ps-4 ">
                <h1>Weight</h1>
              </div>
            </div>
            <div className="listproduct pt-4">
              {temporaryCart.map((product, index) => (
                <div
                  className="row mb-5 align-items-center product"
                  key={index}
                >
                  <div className="col-1">
                    <div
                      className="check-item"
                      style={
                        product.selected
                          ? {
                              backgroundImage: `url(${Check})`,
                            }
                          : {}
                      }
                      onClick={(e) => handleCheckOutItem(e, product.productID)}
                    ></div>
                  </div>
                  <div className="col-2">
                    <img src={product.thumbnail} alt="" className="img" />
                  </div>
                  <div className="col-9 justify-content-between align-items-center">
                    <div className="row align-items-start">
                      <div className="col-9">
                        <h1>{product.name}</h1>
                        <h2>{product.category}</h2>
                      </div>
                      <div className="col-3 d-flex align-items-center weight">
                        <img
                          src={WeightIcon}
                          alt=""
                          className="iconweight me-1"
                        />
                        <p className="p-0">{product.weight}gram</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row total align-items-center pt-2">
              <div className="col-7 offset-3">
                <h1>{totalItems} items</h1>
              </div>
              <div className="col-2 ps-4 ">
                <h1> {totalWeight}gram </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center continueorder">
        <button
          className=" d-flex justify-content-center align-items-center"
          onClick={(e) =>handleNextPhase(e)}
        >
          <p>CONTINUE ORDER</p>
        </button>
      </div>

      <div className="row process ">
        <div className="d-flex align-items-center justify-content-center">
          <div className="number d-flex align-items-center justify-content-center">
            <p>1</p>
          </div>
          <p className="ms-2 processname me-5" onClick={(e) => setStep(0)}>
            Summary orders
          </p>
          <div className="number d-flex align-items-center justify-content-center ms-5">
            <p>2</p>
          </div>
          <p className="ms-2 processname" onClick={(e) => setStep(1)}>
            Leave your information
          </p>
        </div>
      </div>
    </AnimationOnScroll>
  );
}
