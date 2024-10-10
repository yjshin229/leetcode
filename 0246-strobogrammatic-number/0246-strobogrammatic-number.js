/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    const numMap = {"1":"1", "6":"9", "8":"8", "9":"6", "0":"0" }
  
    console.log(num)
    console.log(numMap["2"])
    if(num.length === 1 && (num === "1" || num === "8" || num === "0")) return true;
    let left = 0;
    let right = num.length -1
    while(left <= right){
        
        if(!numMap[num[left]] || numMap[num[left]] !== num[right]){
            return false
        }
        left ++;
        right --;
    }
    
    return true;
};