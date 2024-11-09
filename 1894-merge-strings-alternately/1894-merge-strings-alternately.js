/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ret = ""
    while(word1 || word2){
        if(!word1){
            ret += word2
            return ret
        }else if(!word2){
            ret += word1
            return ret
        }

        ret += word1.charAt(0)
        word1 = word1.substring(1)
        ret += word2.charAt(0)
        word2 = word2.substring(1)
    }

    return ret
};