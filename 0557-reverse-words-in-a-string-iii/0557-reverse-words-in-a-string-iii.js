/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(" ")

    const reverseWord = (word) => {
        let ret = ""
        for(let i = word.length -1; i >=0; i --){
            ret += word.substring(i, i+1)
        }
        return ret
    }


    for(let i=0; i< sArr.length; i++){
        sArr[i] = reverseWord(sArr[i])
    }

    return sArr.join(" ")
};