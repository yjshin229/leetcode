/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const charBank = {
        1 : ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        3: ["z", "x", "c", "v", "b", "n", "m"]
    }
    
    let res = []
    
    
    for(const word of words){
        let currRow = -1
        let tempWord = word.toLowerCase()
        for(let i = 0; i <word.length; i++){
            if(i === 0){
                if(charBank[1].includes(tempWord[i])) currRow = 1
                if(charBank[2].includes(tempWord[i])) currRow = 2
                if(charBank[3].includes(tempWord[i])) currRow = 3
            }else{
                if(!charBank[currRow].includes(tempWord[i])) break
            }
            if(i === word.length -1)  res.push(word) 
        }
       
    }
    
    return res
};