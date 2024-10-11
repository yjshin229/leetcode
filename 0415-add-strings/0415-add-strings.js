/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let carry = 0
    let num1Arr = num1.split("")
    let num2Arr = num2.split("")
    let res = ""

    while(num1Arr.length || num2Arr.length || carry){
    
        let curr = (num1Arr.length !==0 ? parseInt(num1Arr.pop()) : 0) + (num2Arr.length !==0 ? parseInt(num2Arr.pop()) : 0 ) + carry % 10
        
        // if(curr > 10)
        carry = carry - carry%10 + Math.floor(curr/10)
        
        res = (curr % 10).toString() + res
        
    }
    
    return res
};