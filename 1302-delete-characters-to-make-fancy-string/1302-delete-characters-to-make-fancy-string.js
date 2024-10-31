/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let count = 0
    let left = 0
    let right = 0
    let ret = ""

    while(right <= s.length -1){
        if(s.charAt(left) === s.charAt(right)){
            count ++;
            if(count < 3){
                ret += s.charAt(right)
            }
            right ++;
        }else{
            count = 1
            ret += s.charAt(right)
            left = right;
            right ++;
        }   
    }
    return ret
};