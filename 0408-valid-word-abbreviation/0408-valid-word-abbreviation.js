/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {

    let currentAbbr = ""
    let idx = 0
    
    const abbrWord = () => {
        const abbrLen = parseInt(currentAbbr)
        if(abbrLen > word.substring(idx).length) return false
        word = word.substring(0,idx) + currentAbbr + word.substring(idx + abbrLen)
    }
    
    for(let i = 0; i < abbr.length; i++){
        if(!isNaN(abbr[i])){
            if(abbr[i] === "0" && currentAbbr.length !==0){
                currentAbbr += abbr[i]
            }else if(abbr[i] === "0" && currentAbbr.length ===0){
                return false
            }else{
                currentAbbr += abbr[i]
                if(i !== 0 && isNaN(abbr[i-1])){
                    idx = i
                }
            }
        }else{
            if(currentAbbr !== "" ){
                abbrWord()
                currentAbbr = ""   
            }
             
        }
    }
    if(currentAbbr){
        idx = abbr.length -1
        abbrWord()
    }
    if(word === abbr) return true
    return false
};