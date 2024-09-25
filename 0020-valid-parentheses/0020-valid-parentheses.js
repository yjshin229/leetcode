/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const matchingPair = { "(" : ")" , "[" : "]", "{": "}"} 
    let stack = []
    
    for(const char of s){
        if(char === "(" || char === '[' || char === '{'){
            stack.push(char)
        }else{
            let temp = stack.pop()
            if(matchingPair[temp] !== char) return false
        }
    }
    
    if(stack.length !== 0) return false
    
    return true
    
};