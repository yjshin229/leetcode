/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let shortest = wordsDict.length;
    // const indexOfWord1 = wordsDict.indexOf(word1);
    // while(wordsDict.indexOf(word2) !== -1){
    //     const curr = wordsDict.indexOf(word2);
    //     if(Math.abs(indexOfWord1 - curr) < shortest){
    //         shortest = Math.abs(indexOfWord1 - curr);
    //         wordsDict[curr] = "";
    //     }
    // }    
    let word1Idx = []
    let word2Idx = []
    for(let i =0; i < wordsDict.length; i++){
        if(wordsDict[i] === word1){
            word1Idx.push(i)
        }else if(wordsDict[i] === word2){
            word2Idx.push(i)
        }
    }
    word1Idx.forEach(idx1 => {
        for(const idx2 of word2Idx){
            if(Math.abs(idx2 - idx1) < shortest) shortest = Math.abs(idx2 - idx1)
        }
    })
    
    return shortest
    
};