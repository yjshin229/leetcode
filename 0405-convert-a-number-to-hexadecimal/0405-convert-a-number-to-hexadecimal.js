/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    const hexMap = {0:'0', 1:'1', 2:'2', 3:'3', 4:'4', 5:'5', 6:'6', 7:'7', 8:'8', 9:'9', 10:'a', 11:'b', 12:"c", 13:"d", 14:"e", 15: "f"}

    if(num === 0) return "0"
    const getDigit = () => {
        let temp = 1
        while(temp * 16 <= num){
            temp *= 16
            // count ++;
        }
        return temp
    }
    let res = ""

    if(num < 0 ){
        num = 0xFFFFFFFF + num + 1;
    }
    while(num > 0){
        // if(num < 16){
        //     res += hexMap[num]
        //     num = 0
        // }else{
        //     let temp = getDigit()
        //     let digit = Math.floor(num / temp)
        //     res += hexMap[digit]
        //     num -= temp * digit
        // }
         let remainder = num % 16;  // Get the remainder (hex digit)
        res = hexMap[remainder] + res;  // Add the hex digit to the result
        num = Math.floor(num / 16);  // Move to the next higher digit
    } 
    
    
    return res
};