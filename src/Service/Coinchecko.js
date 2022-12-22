import http from "./httpService";

async function getTicker(coin) {
  const { data: tickers } = await http.get(
    "https://api.coingecko.com/api/v3/coins/" + `${coin}` + "/tickers"
  );
  return tickers;
}

export { getTicker };
