import React, { Component } from "react";
import axios from "axios";
import Config from "../config.json";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
class Market extends Component {
  state = {
    coins: [],
  };

  async componentDidMount() {
    const result = await axios.get(`${Config.apiMarket}`);
    console.log(result);
    this.setState({ coins: result.data });
  }

  handleCount = () => {};
  render() {
    const { coins } = this.state;
    return (
      <div className="continer navbar navbar-dark bg-light">
        <div className="collapse navbar-collapse justify-content-start d-flex my-4">
          <NavLink
            className="nav-link font-monospace fw-bold text-muted"
            to="/"
          >
            Coins
          </NavLink>
          <NavLink
            className="nav-link font-monospace fw-bold text-muted"
            to="/market/gainerloser"
          >
            Gainer & Loser
          </NavLink>
          <NavLink
            className="nav-link font-monospace fw-bold text-muted"
            to="/"
          >
            New Listing
          </NavLink>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th> # </th>
              <th> Name </th>
              <th> Symbol </th>
              <th> Price </th>
              <th> Circulating Supply </th>
              <th> MarketCap </th>
              <th> 24h/Change </th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td>
                  <img src={coin.image} style={{ width: "30px" }} alt="coin" />
                </td>
                <td className="font-monospace fw-bold text-muted">
                  {coin.name}
                </td>
                <td className="font-monospace fw-bold text-muted">
                  {coin.symbol.toUpperCase()}
                </td>
                <td className="font-monospace fw-bold text-muted">
                  ${coin.current_price}
                </td>
                <td className="font-monospace fw-bold text-muted">
                  {coin.circulating_supply}
                </td>
                <td className="font-monospace fw-bold text-muted">
                  ${coin.market_cap}
                </td>
                <td>
                  {coin.price_change_percentage_24h < 0 ? (
                    <span className="pb-3">
                      <FiArrowDown className="link-danger" />
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span>
                      <FiArrowUp className="link-success" />
                      {"+" + coin.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Market;
