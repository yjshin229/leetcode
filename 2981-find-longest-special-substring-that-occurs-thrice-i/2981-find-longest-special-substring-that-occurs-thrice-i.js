/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
 let specialArr = new Set()
 let left = 0;
 let right = 0;
 let max = -1;
 while(right < s.length){
    if(s[left] === s[right]){
        specialArr.add(s[left].repeat(right-left+1));
        right ++;
    }else{
        specialArr.add(s[right]);
        left =right;
        right ++;
    }
 }
 
 specialArr = Array.from(specialArr)

 const findNum = (str) => {
    let length = str.length;
    let idx= 0;
    let count = 0;
    while(idx + length <= s.length){
        if(count >= 3){
            max = Math.max(max, length)
        }
        if(s.substring(idx, idx+length) === str){
            count ++;
        }
        idx ++;
    }
    if(count >= 3){
            max = Math.max(max, length)
        }
 }

 for(const str of specialArr){
    findNum(str)
 }
 return max;
};