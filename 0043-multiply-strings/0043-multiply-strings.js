/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let res = []
    
    for(let i =0; i < num1.length; i ++){
        for(let j =0; j<num2.length; j ++){
            let temp = parseInt(num1[i]) * parseInt(num2[j])
            if(temp.toString().length > 1){
                {res[i+j]? res[i+j] += Math.trunc(temp/10) : res[i+j] =  Math.trunc(temp/10)}
                {res[i+j+1]? res[i+j+1] += temp % 10 : res[i+j+1] = temp % 10 }
            }else{
                {res[i+j]? res[i+j] += 0 : res[i+j] = 0}
                {res[i+j+1]? res[i+j+1] += temp : res[i+j+1] = temp}
            }
        }
    }

    
    for(let i = res.length -1 ; i >= 0; i --){
        if(res[i] >= 10 && res !== 0){
            const temp = Math.trunc(res[i] / 10)
            res[i-1] += temp
            res[i] = res[i] % 10
        }else if(res[i] >= 10 && res === 0){
            const temp = Math.trunc(res[i] / 10)
            res.unshift(temp)
            res[i] = res[i] % 10
        }
    }
    
    const resultString = res.join('').replace(/^0+/, '')
    if(resultString === "") return "0"
    return resultString
};