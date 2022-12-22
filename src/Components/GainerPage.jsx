import React from "react";
import { useState, useEffect } from "react";
import { getTicker } from "../Service/Coinchecko";

const bitcoinTicker = getTicker("bitcoin");
function GainerPage() {
  const [coinTicker, setCoinTicker] = useState(bitcoinTicker);

  useEffect(() => {
    async function getCoin() {
      const coins = await coinTicker.map((coin) => coin.ticker);
      console.log(coins);
    }
  });
  return (
    <div>
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
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export default GainerPage;
