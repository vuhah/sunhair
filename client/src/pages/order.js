import Summary from "../layouts/summary";
import Checkout from "../layouts/checkout";
import { BgOrder } from "../images/order";
import { useState } from "react";
export default function Orders() {
  const [step, setStep] = useState(0);

  return (
    <>
      <div className="container-fluid ">
        <div className="row orderpage align-items-center">
          <div className="col-5 content">
            {step ? (
              <Checkout setStep={setStep} />
            ) : (
              <Summary setStep={setStep} />
            )}
          </div>
          <div className="col-7 bgorder align-items-center justify-content-center p-0">
            <div
              className="bgorder-img"
              style={{ backgroundImage: `url(${BgOrder})` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
