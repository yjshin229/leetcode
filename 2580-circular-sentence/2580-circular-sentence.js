/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    if(sentence.charAt(0) !== sentence.charAt(sentence.length -1)) return false

    let sentenceArr = sentence.split(" ")
    let stack = []
    for(let i = 0; i < sentenceArr.length; i++){
        const word = sentenceArr[i]
        let firstChar = word.charAt(0)
        let lastChar = word.charAt(word.length -1)
        if(i === 0){
            stack.push(firstChar)
            stack.push(lastChar)
        }else{
            if(firstChar === stack[stack.length-1]){
                stack.pop()
                stack.push(lastChar)
            }else{
                return false
            }
        }  
    }
    if(stack.length > 2){
        return false
    }
    return true
};