/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letterMap = {'2':['a', 'b', 'c'], '3': ['d', 'e', 'f'], '4': ['g', 'h','i'], '5': ['j','k', 'l'], '6': ['m', 'n', 'o'], '7': ['p', 'q', 'r', 's'], '8': ['t', 'u', 'v'], '9': ['w', 'x', 'y', 'z']}
    
    let res = []
    let idx = 0

    const backTrack = (temp, digit) => {
        if(temp.length === digits.length){
            res.push(temp)
         
            return
        }else{
            for(let i = 0; i < letterMap[digit].length; i++){
                temp += (letterMap[digit][i])
              
                backTrack(temp, digits[temp.length])
                temp = temp.slice(0,-1)
        
            }
        }
    }
    
    if(!digits) return res
    let temp = ""
    backTrack(temp, digits[idx])
    
    return res
};