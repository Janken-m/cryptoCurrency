import React from "react";
import "../Css/Hero.css";
import Crypto from "../assets/hero-img.png";

function Hero() {
  return (
    <div className="pc bg-dark badge rounded-pill bg-info text-light my-5">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <p className="font-monospace">
            Get our news by registering your email...
          </p>
          <h1>Invest in Cryptocurreny with Your IRA</h1>
          <p className="font-monospace">
            Buy, Sell, Mine and store hundreds of cryptocurrencies
          </p>
          <div className="input-group input-group-sm px-5 py-4">
            <input
              className="form-control rounded-pill"
              type="email"
              placeholder=" Enter your email..."
            />
            <button className="btn btn-secondary rounded-pill ms-2 py-2 fw-bold">
              Register
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
