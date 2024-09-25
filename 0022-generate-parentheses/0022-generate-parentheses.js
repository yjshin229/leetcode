/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    
    const backtrack = (temp, open, close) => {
        if (open === n && close === n){
            res.push(temp)
            return
        }
        if(open < n){
            backtrack(temp +'(', open +1, close)
        }
        
        if(close < open){
            backtrack(temp + ')', open, close+1)
        }
    }
    
    backtrack("", 0, 0)
    return res
};