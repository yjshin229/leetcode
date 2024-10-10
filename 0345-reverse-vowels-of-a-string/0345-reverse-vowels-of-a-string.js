/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ["a", "e", "o", "u", "i", "A", "E", "O", "U", "I"];
    
    const swap = (idx1, idx2, res) => {
        let temp = res[idx1]
        res[idx1] = s[idx2]
        res[idx2] = temp
    }
    
    let left = 0;
    let right = s.length -1

    let res = s.split("")
    while(left < right){
        if(vowels.includes(res[left]) && vowels.includes(res[right])){
            swap(left, right, res);
            left ++;
            right --;
        }else if(vowels.includes(res[left]) && !vowels.includes(res[right])){
            right --;
        }else{
            left ++;
        }
    }
    return res.join("")
};