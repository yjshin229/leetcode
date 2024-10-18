/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // let count = 0

    // const rec = (stairsLeft) => {
    //     if(stairsLeft === 0){
    //         count ++;
    //         return
    //     }else{
    //         if(stairsLeft>=2){
    //             rec(stairsLeft - 2)
    //         }
    //         rec(stairsLeft -1)
    //     }
    // }
    // rec(n)
    // return count
    const helper = (n, a, b) => {
        if (n === 0) return a;
        return helper(n - 1, b, a + b);
    };

    return helper(n, 1, 1);
};