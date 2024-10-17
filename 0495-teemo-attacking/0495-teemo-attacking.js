/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let ret = 0
    for(let i =0; i< timeSeries.length; i++){
        if(i === 0){
           ret += duration
        }else{
            if((timeSeries[i-1] + duration) > timeSeries[i]){
                ret -= (timeSeries[i-1] + duration -timeSeries[i])
                ret += duration
            }else{
                ret += duration 
            }
        }
    }
    return ret
};