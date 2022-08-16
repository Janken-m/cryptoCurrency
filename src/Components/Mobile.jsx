import React from "react";
import "../Css/Mobile.css";
import Crypto from "../assets/trade.png";

function Mobile() {
  return (
    <div className="Mobile">
      <div className="container">
        {/* left */}
        <div className="left">
          <img src={Crypto} alt="" />
        </div>

        {/* right */}
        <div className="right ">
          <h2>Earn passive income with crypto.</h2>
          <p className="font-monospace fw-bold text-muted">
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
            your assets in the app to automatically earn rewards at the end of
            each month with no lockups and no limits.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
