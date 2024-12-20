/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let total = numBottles;

    let remain = numBottles;
    while(remain >= numExchange){
        const newBottles = Math.floor(remain/numExchange)
        remain = newBottles + remain % numExchange;
        total += newBottles;
    }
    return total;
};