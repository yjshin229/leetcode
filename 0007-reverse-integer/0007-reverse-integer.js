/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    console.log(Math.pow(2,31))
    if(x < Math.pow(-2, 31) || x > Math.pow(2,31) -1) return 0
    let xStr = x.toString()
    let res = ""
    if(xStr[0] === "-"){
        res += "-"
        xStr = xStr.substring(1)
    }

    for(let i = xStr.length -1; i >=0 ; i --){
        res += xStr[i]
    }

    if(parseInt(res) < Math.pow(-2, 31) || parseInt(res) > Math.pow(2,31) -1) return 0
    return parseInt(res)
};