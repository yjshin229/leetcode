/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {

    const getColWord = (idx) => {
        let res = ""
        for(const word of words){
            if(idx >= word.length){
                return res
            }
            res += word[idx]
        }
        return res
    }

    for(let i= 0; i < words.length; i++){
        let colWord = getColWord(i)
        if(words[i] !== colWord) return false
    }
    return true
};