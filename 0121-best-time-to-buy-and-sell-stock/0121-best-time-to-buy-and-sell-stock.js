/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0
    let right = prices.length -1
    
    let min = Math.pow(10,4) + 1
    
    let profit = 0
   
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i]
        }else if(prices[i] - min > profit){
            profit = prices[i] - min
        }
    }
    
    return profit
};