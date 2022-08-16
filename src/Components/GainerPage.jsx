import React, { Component } from "react";
import axios from "axios";
import Config from "../config.json";

class GainerPage extends Component {
  state = {
    coins: [],
  };

  async componentDidMount() {
    const result = await axios.get(`${Config.apiMarket}`);
    console.log(result);
    this.setState({ coins: result.data });
  }
  render() {
    const { coins } = this.state;
    return (
      <>
        <div className="table table-dark table-striped">
          <table>
            <thead>
              <tr>
                <th>Coin</th>
                <th className="ps-3">Volume</th>
                <th className="ps-3">Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <tr key={coin.id}>
                  <td>
                    {coin.name}
                    <img
                      src={coin.image}
                      style={{ width: "20px", margin: "2" }}
                      alt="coin"
                    />
                  </td>
                  <td className="ps-3">${coin.total_volume}</td>
                  <td className="ps-3"> {coin.current_price} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table table-dark table-striped">
          <table>
            <thead>
              <tr>
                <th>Coin</th>
                <th>Volume</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default GainerPage;
