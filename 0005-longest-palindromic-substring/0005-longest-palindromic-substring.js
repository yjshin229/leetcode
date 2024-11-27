/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 1) return "";

    let start = 0;
    let end = 0;

    const findPalindrome = (left, right) => {
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left --;
            right ++;
        }
        return right - left - 1;
    }

    for(let i = 0; i < s.length; i++){
        let oddLen = findPalindrome(i, i);
        let evenLen = findPalindrome(i, i+1);

        let maxLen = Math.max(oddLen, evenLen);

        if(maxLen > end - start){
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }

    return s.substring(start, end+1)
};