/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let round = Math.floor(time / (n-1))
    let remain = time % (n-1);
    if(round === 0){
        return 1 + remain;
    }else if(round % 2 === 0){
        return 1 + remain
    }else{
        return n - remain
    }
};
