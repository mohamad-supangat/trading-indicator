const { macd } = require("../index.js");

// console.log(indicator);
async function main() {
  console.log("MACD 12 26 9 on Binance BTC/USDT 15m");
  let macdData = await macd(
    12,
    26,
    9,
    "close",
    "binance",
    "BNB/USDT",
    "15m",
    true
  );

  // console.log(macdData[macdData.length - 1]);
  let chartData = macdData[macdData.length - 2];
  let signal = chartData.MACD >= chartData.signal ? "buy" : "sell";
  console.log(chartData, signal);
}

main();
