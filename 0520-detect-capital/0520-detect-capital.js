/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    
    const isCapital = (char) => {
        return char === char.toUpperCase()
    }

    const allCapital = () => {
        for(const char of word){
            if(!isCapital(char)) return false
        }
        return true
    }

    const firstCapital = () => {
        if(!isCapital(word.substring(0,1))) return false

        for(let i = 1 ;i < word.length; i ++){
            if(isCapital(word.substring(i,i+1))) return false
        }

        return true
    }

    const allLower = () => {
        for(const char of word){
            if(isCapital(char)) return false
        }
        return true
    }

    return allCapital() || firstCapital() || allLower()
};