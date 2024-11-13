/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let count = 0

    const shift = (word) => {
        return word.substring(1) + word.substring(0,1)
    }

    while(count < s.length){
        let shifted = shift(s)
        s = shifted
        count ++;
        if(shifted === goal) return true
    }
    return false
};