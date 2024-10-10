/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function(currentState) {
    if(currentState.length < 2) return []
    
    let res = []
    
    for(let i = 1; i < currentState.length; i ++){
        if(currentState[i] === "-" || currentState[i-1] === "-") continue
        res.push(currentState.substring(0,i-1)+ "--"+ currentState.substring(i+1))
    }
    
    return res
};