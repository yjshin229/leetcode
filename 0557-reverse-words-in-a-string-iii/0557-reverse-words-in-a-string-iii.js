/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(" ")

    const reverseWord = (word) => {
        // let ret = ""
        // for(let i = word.length -1; i >=0; i --){
        //     ret += word.substring(i, i+1)
        // }
        // return ret

        let tempArr = word.split("")
        let left = 0
        let right = tempArr.length -1
        while(left <= right){
            let temp = tempArr[left]
            tempArr[left] = tempArr[right]
            tempArr[right] = temp

            left ++;
            right --;
        }
        return tempArr.join("")
    }


    for(let i=0; i< sArr.length; i++){
        sArr[i] = sArr[i].split("").reverse().join("")
    }

    return sArr.join(" ")
};