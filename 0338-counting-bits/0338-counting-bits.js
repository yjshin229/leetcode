/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = []
    for(let i = 0; i <= n ; i++){
        let count = 0
        let temp = i
        while(temp !== 0){
            count += temp & 1
            temp = temp >>> 1
        }
        ans.push(count)
    }
    return ans
};