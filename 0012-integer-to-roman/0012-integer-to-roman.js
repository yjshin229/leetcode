/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let res = ""
    let dec = 1
    
    
    const symbolDict = {1:'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'}
    const keys = Object.keys(symbolDict);
    keys.reverse()

    
    const getSymbol = (currentNum) => {
        let res = ""
        for(const key of keys){
           if(currentNum >= key){
               if(currentNum % key === 0){
                   let temp = currentNum / key
                   res += symbolDict[key].repeat(temp)
                   currentNum = 0
               }else{
                   res += symbolDict[key]
                   currentNum -= key
               }
            }
        }
        return res
    }
    
    while(num !== 0){
        let curr = num % 10
        switch (curr){
           case 4:
                if(dec === 100){
                    res = "CD".concat(res)
                }else if (dec === 10){
                    res = "XL".concat(res)
                }else if(dec === 1){
                    res = "IV".concat(res)
                }else{
                    res = "M".repeat(4).concat(res)
                }
                
                break;
            case 9:
                if(dec === 100){
                    res = "CM".concat(res)
                }else if (dec === 10){
                    res = "XC".concat(res)
                }else if(dec===1){
                    res = "IX".concat(res)
                }else{
                    res = "M".repeat(9).concat(res)
                }
                
                break;
            default:
                let temp = curr * dec
                res = getSymbol(temp).concat(res)
                break;
        }
        num = Math.trunc(num /10)
        dec *= 10                               
        
    }
    return res
    
};