import { useEffect, useState } from "react";
import axiosInstance from "../config/axiosConfig";

export default function OrderList() {
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    async function getOrders() {
      try {
        const orders = await axiosInstance({
          url: "/order/getOrders",
          method: "GET",
        });
        console.log(orders.data);
        setData(orders.data);
      } catch (err) {
        console.log(err);
      }
    }

    getOrders();
  }, [trigger]);

  async function handleDeleteOrder(e, id) {
    e.preventDefault();
    try {
      const res = await axiosInstance({
        url: "/order/deleteOrder",
        method: "POST",
        data: { id: id },
      });
      setTrigger((prev) => !prev);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container orderlist">
      <h1 className="title">ORDERS</h1>
      <div className="row header">
        <div className="col-1">FIRSTNAME</div>
        <div className="col-1">LAST NAME</div>
        <div className="col-1">COUNTRY</div>
        <div className="col-2">EMAIL</div>
        <div className="col-1">WHATSAPP</div>
        <div className="col-3">ORDERS</div>
        <div className="col-2">TIME</div>
        <div className="col-1">MARK</div>
      </div>
      <div className="contentbody">
        {data.map((ele, index) => (
          <div key={index} className="row body">
            <div className="col-1">{ele.firstname}</div>
            <div className="col-1">{ele.lastname}</div>
            <div className="col-1">{ele.country}</div>
            <div className="col-2">{ele.email}</div>
            <div className="col-1">{ele.whatsapp}</div>
            <div className="col-3">
              {ele.orders.map((ele, index) => (
                <div
                  className="order d-flex align-items-center justify-content-between"
                  key={index}
                >
                  <p>{ele.name}</p>
                  <p>{ele.weight}</p>
                </div>
              ))}
            </div>
            <div className="col-2">
              {new Date(ele.time).toString("YYYY-MM-dd")}
            </div>
            <div className="col-1">
              <button
                className="mark-completed"
                onClick={(e) => handleDeleteOrder(e, ele._id)}
              >
                DONE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
