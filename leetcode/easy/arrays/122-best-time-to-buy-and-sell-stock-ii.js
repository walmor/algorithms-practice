/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buying = true;
  let profit = 0;
  let buyingPrice = prices[0];
  let sellingPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    let currPrice = prices[i];
    if (buying) {
      if (currPrice < buyingPrice) {
        buyingPrice = currPrice;
      } else {
        sellingPrice = currPrice;
        buying = false;
      }
    } else {
      if (currPrice > sellingPrice) {
        sellingPrice = currPrice;
      } else {
        profit += sellingPrice - buyingPrice;
        buyingPrice = currPrice;
        buying = true;
      }
    }
  }

  if (!buying && sellingPrice > buyingPrice) {
    profit += sellingPrice - buyingPrice;
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([0, 10, 20, 40, 30]));
console.log(maxProfit([1, 5, 1, 5, 1, 5, 1, 1, 1, 2]));
console.log(maxProfit([1, 2, 3, 4, 1, 2, 3, 4, 1, 2]));
console.log(maxProfit([10, 1, 10, 1, 10, 1]));
