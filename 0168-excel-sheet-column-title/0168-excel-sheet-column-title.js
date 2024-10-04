/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const hashTable = {
        1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 
        6: "F", 7: "G", 8: "H", 9: "I", 10: "J",
        11: "K", 12: "L", 13: "M", 14: "N", 15: "O",
        16: "P", 17: "Q", 18: "R", 19: "S", 20: "T",
        21: "U", 22: "V", 23: "W", 24: "X", 25: "Y", 
        26: "Z"
    }
    // const quotient = Math.trunc(columnNumber / 26)
    // const remainder = columnNumber % 26

    // console.log(quotient, remainder)

    let res = ""
    while(columnNumber !== 0){
        const remainder = columnNumber % 26 

        console.log(remainder)
        if(remainder === 0){
            res =  hashTable[26] + res
            columnNumber = Math.trunc((columnNumber - 1) / 26);
        }else{
            res = hashTable[remainder] + res
            columnNumber = Math.trunc(columnNumber/26) 
        }
    }

   
    return res
    
};