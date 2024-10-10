/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "");
    
    let left = 0
    let right = s.length -1
    
    console.log(s)
    if(s.length <= 1) return true
    
    
    s = s.toLowerCase();
    
    while(left < right){
        if(s.charAt(left) !== s.charAt(right)){
            return false
        }
        
        left ++;
        right --;
    }
    return true;
    
};