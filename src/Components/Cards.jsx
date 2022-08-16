import React, { Component } from "react";
import axios from "axios";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import "../Css/Featured.css";
import config from "../config.json";
import { NavLink } from "react-router-dom";

class Cards extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const result = await axios.get(config.apiEndpoint);
    console.log(result);
    this.setState({ data: result.data });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="featured">
        <div className="container">
          {/* Left */}
          <div className="left">
            <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dash</h2>
            <p className="font-monospace fw-bold text-muted">
              See all available assets: Cryptocurrencies...
            </p>
            <NavLink to="/market">
              <button className="btn btn-secondary rounded-pill ms-2 py-2 fw-bold">
                Coins Price
              </button>
            </NavLink>
          </div>

          {/* Right */}

          <div className="right">
            {data.map((d) => (
              <div key={d.id} className="card" style={{ height: "11.5rem" }}>
                <div>
                  <img src={d.image} alt="" />
                </div>
                <h5> {d.name} </h5> <p> ${d.current_price.toString()} </p>
                {d.price_change_percentage_24h < 0 ? (
                  <span className="pb-3">
                    <FiArrowDown className="link-danger" />
                    {d.price_change_percentage_24h.toFixed(2)}%
                  </span>
                ) : (
                  <span>
                    <FiArrowUp className="link-success" />
                    {d.price_change_percentage_24h.toFixed(2)}%
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
