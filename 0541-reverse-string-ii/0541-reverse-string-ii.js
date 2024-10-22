/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if(s.length === 1) return s
    let left = 0
    let right = left + k

    let res = ""
    const reverse = (idx1, idx2) => {
        let ret = ""
        const subString = s.substring(idx1, idx2).split("")
        for(let i = subString.length -1; i >=0 ; i--){
            ret+= subString[i]
        }
        return ret
    }

    while(left <= s.length -1){
        const remaining = (s.length) - left
        if(remaining < 2*k && remaining >= k ){
            res += reverse(left, right)
            res += s.substring(right)
            break;
        }else if(remaining < k){
            if(remaining === 1) {
                res += s.substring(left)
            }else{
                res += reverse(left)
            }
            
            break;
        }else{
            res +=reverse(left, right)
            res += s.substring(right, right + k)
        }
        left = right + k 
        right = left + k
        
    }

    return res
};

