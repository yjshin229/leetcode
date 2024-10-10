/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false
    
    let magazineArr = magazine.split("")
    for(const char of ransomNote){
        const idx = magazineArr.indexOf(char)
        console.log(idx)
        if(idx === -1) return false
        else magazineArr.splice(idx,1)
    }
    return true
};