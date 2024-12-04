/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    if(str1.length < str2.length) return false
    const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

    const isNextAlphabet = (char, idx) => {
        const charIdx = alphabets.indexOf(char)
        if(charIdx === 25){
            if(alphabets[0] === str2[idx]){
                return true;
            }else{
                return false;
            }
        }else{
            if(alphabets[charIdx+1] === str2[idx]){
                return true;
            }else{
                return false;
            }
        }
    }
    let idx = 0;
    let result = ""
    for(const char of str1){
        if(result === str2){
            return true;
        }
        if( char === str2[idx] || isNextAlphabet(char, idx)){
            result += str2[idx];
            idx ++;
        }
    }

    if(result === str2) return true;
    return false;

};