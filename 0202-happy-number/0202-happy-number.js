/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let happySet = new Set()

    const getDigits = (n) => {
        let res=[]
        while(n){
            res.unshift(n%10)
            n = Math.floor(n / 10)
        }
        return res
    }

    

    while(n !== 1){
        if(happySet.has(n)){
            return false
        }else{
            happySet.add(n)
            let temp = getDigits(n)
            let sum = 0
            for(const num of temp){
                sum += Math.pow(num,2)
            }
             n = sum
        } 
    }
    return true
};