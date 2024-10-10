/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false
    
    for(const char of ransomNote){
        const idx = magazine.indexOf(char)
        console.log(idx)
        if(idx === -1) return false
        else magazine = magazine.substring(0,idx) + magazine.substring(idx+1)
    }
    return true
};