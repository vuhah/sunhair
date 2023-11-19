import {Header1, Header2} from "../components/header";
import { Checked } from "../images/order";
import { Link } from "react-router-dom";

export default function Completed() {
  return (
    <div className="completed">
      <Header1 />
      <Header2/>
      <div className="content d-flex flex-column align-items-center justify-content-center">
        <h1>Thank you for your order!</h1>
        <p className="mt-4">
          Please check your Email and WhatsApp for further instructions on how
          to complete your purchase!
        </p>
        <div className="mt-5">
          <p className="mt-5 d-inline">Having trouble?</p>
          <a
            className="d-inline contact ms-3"
            href="https://wa.me/84912124125"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
        </div>
        <Link to="/" className="mt-5 tohomepage d-flex justify-content-center align-items-center">
            <p>Continue to homepage</p>
        </Link>
        <div className="row process ">
          <div className="d-flex align-items-center justify-content-center">
            <div
              style={{
                backgroundImage: `url(${Checked})`,
              }}
              className="number d-flex align-items-center justify-content-center"
            ></div>
            <p className="ms-2 processname me-5">Summary orders</p>
            <div
              style={{
                backgroundImage: `url(${Checked})`,
              }}
              className="number d-flex align-items-center justify-content-center ms-5"
            ></div>
            <p className="ms-2 processname">Leave your information</p>
          </div>
        </div>
      </div>
    </div>
  );
}
