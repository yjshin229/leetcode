/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    if(sentence1 === sentence2) return true
    let sentence1Arr = sentence1.split(" ") 
    let sentence2Arr = sentence2.split(" ")
 let i = 0;
    let j = 0;
    
    // Compare from the beginning
    while (i < sentence1Arr.length && i < sentence2Arr.length && sentence1Arr[i] === sentence2Arr[i]) {
        i++;
    }
    
    // Compare from the end
    while (j < sentence1Arr.length - i && j < sentence2Arr.length - i && sentence1Arr[sentence1Arr.length - 1 - j] === sentence2Arr[sentence2Arr.length - 1 - j]) {
        j++;
    }

    // If the words from start and end match, and the difference can be inserted in between
    return i + j === Math.min(sentence1Arr.length, sentence2Arr.length);
    

    
};

