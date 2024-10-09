/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = []

    for(const char of s){
        if(char === "("){
            stack.push(char);
        }else{
            if(stack[stack.length -1] === '('){
                stack.pop()
            }else{
                stack.push(char)
            }
        }
    }
    return stack.length
};