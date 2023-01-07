import { useSelector } from "react-redux";
import { Bag, Checked } from "../images/order";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useNavigate } from "react-router-dom";
import  axiosInstance from "../config/axiosConfig";

function sumOfWeight(cart) {
  let sum = 0;
  for (const i of cart) {
    sum = sum + i.weight;
  }
  return sum;
}

export default function Summary({ setStep }) {
  const cart = useSelector((state) => state.cart.productsadded);
  const totalItems = cart.length;
  const totalWeight = sumOfWeight(cart);
  const naviage = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    email: "",
    whatsapp: "",
    orders: cart,
  });

  async function handleCompleted(e) {
    e.preventDefault();
    console.log(data);
    const res = await axiosInstance({
      url:"/order/updateOrder",
      method:"POST",
      data: data
    })
    console.log(res.data);
    naviage('/ordercompleted')
  }

  return (
    <AnimationOnScroll
      animateIn="animate__backInLeft"
      className="container checkout"
    >
      <div className="row justify-content-between header align-items-center">
        <div className="col-4">
          <Link to="/product" className="backShopping">
            Continue Shopping
          </Link>
        </div>
        <div className="col-4 ">
          <div
            className="d-flex align-items-center text-black float-end"
            onClick={(e) => setStep(0)}
          >
            <p className="numofitem">
              <p>{totalItems} items</p>
            </p>
            <img className="bag" src={Bag} alt="" />
          </div>
        </div>
      </div>

      <div className="title">
        <h1>
          Give us some information. <br />
          We will contact you soon.
        </h1>
      </div>

      <div className="d-flex align-items-center name">
        <div className="firstname">
          <lable>
            <p className="inputtitle ps-3">First name</p>
            <input
              type="text"
              value={data.firstname}
              className="namefield-firstname inputfield"
              placeholder="Sun"
              onChange={(e) =>
                setData((prev) =>
                  Object.assign({}, prev, { firstname: e.target.value })
                )
              }
            />
          </lable>
        </div>
        <div className="lastname ">
          <lable className="">
            <p className="inputtitle ps-3">Last name</p>
            <input
              type="text"
              value={data.lastname}
              placeholder="Nguyen"
              className="namefield inputfield"
              onChange={(e) =>
                setData((prev) =>
                  Object.assign({}, prev, { lastname: e.target.value })
                )
              }
            />
          </lable>
        </div>
      </div>

      <div className="field">
        <lable>
          <p className="inputtitle ps-3">Country</p>
          <input
            type="text"
            value={data.country}
            placeholder="Viet Nam"
            className="inputfield"
            onChange={(e) =>
              setData((prev) =>
                Object.assign({}, prev, { country: e.target.value })
              )
            }
          />
        </lable>
      </div>

      <div className="field">
        <lable>
          <p className="inputtitle ps-3">Email</p>
          <input
            type="text"
            value={data.email}
            placeholder="sunnguyen@gmail.com"
            className="inputfield"
            onChange={(e) =>
              setData((prev) =>
                Object.assign({}, prev, { email: e.target.value })
              )
            }
          />
        </lable>
      </div>

      <div className="field">
        <lable>
          <p className="inputtitle ps-3">Whatsapp</p>
          <input
            type="text"
            value={data.whatsapp}
            placeholder="+84 123 456 789"
            className="inputfield"
            onChange={(e) =>
              setData((prev) =>
                Object.assign({}, prev, { whatsapp: e.target.value })
              )
            }
          />
        </lable>
      </div>

      <div className="field">
        <p className="inputtitle ps-3 d-inline">Orders: </p>
        <p className="inputtitle d-inline">
          {totalItems} items, {totalWeight} gram
        </p>
        <div className="order">
          {cart.map((ele, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between mb-2 mt-1"
            >
              <p className="nameproduct">{ele.name}</p>
              <p className="weightproduct">{ele.weight} gram</p>
            </div>
          ))}
        </div>
      </div>

      <div className="row justify-content-center continueorder">
        <button
          className=" d-flex justify-content-center align-items-center"
          onClick={(e) => handleCompleted(e)}
        >
          <p>SEND US YOUR ORDERS</p>
        </button>
      </div>

      <div className="row process ">
        <div className="d-flex align-items-center justify-content-center">
          <div
            style={{
              backgroundImage: `url(${Checked})`,
            }}
            className="number d-flex align-items-center justify-content-center"
          ></div>
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
