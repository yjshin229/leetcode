/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if(k === 0) return new Array(code.length).fill(0)
    let ret = []

    const addNums = (start, end) => {
        let sum = 0
        let temp= start
        if(start <= end){
            while(temp <= end){
                sum += code[temp]
                temp ++;
            }
        }else{
            while(temp <= code.length -1){
                sum += code[temp]
                temp ++;
            }
            temp = 0
            while(temp <= end){
                sum += code[temp]
                temp ++;
            }
        }
        return sum
    }
    if(k > 0){
        for(let i = 0; i < code.length;i++){
            if(i + k <= code.length - 1){
                ret.push(addNums(i+1, i+k))
            }else{
                ret.push(addNums(i+1, k - (code.length - i)))
            }
        }
    }else{
        for(let i = 0; i < code.length;i++){
            if(i + k >= 0){
                ret.push(addNums(i+k, i-1))
            }else{
                let start = i + k === k ? code.length + k : code.length + k + i
                let end = i - 1 < 0 ? start - k - 1: i - 1
                ret.push(addNums( start, end ))
            }
        }
    }
    return ret
};