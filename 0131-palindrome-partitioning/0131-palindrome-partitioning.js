/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = []
    const sLen = s.length
    
    const checkPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;
        
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };
    
    const backTrack = (temp, str) => {
        if(str.length === 0 ){
            res.push([...temp])
            return
        }
        
        for(let i =0; i<str.length; i++){
            const curr = str.slice(0,i+1)
            if(checkPalindrome(curr)) {
                temp.push(curr)
                backTrack(temp, str.slice(i+1))
                temp.pop()
            }
        }
    }
    
    backTrack([],s)
    return res
};