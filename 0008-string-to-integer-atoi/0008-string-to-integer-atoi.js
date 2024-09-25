/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let trimmed = s.trimStart()
    let res = ''
    let negative = false
    
    for(let i =0; i<trimmed.length; i++){
        if(i === 0 && (trimmed[i] === '-' || trimmed[i] === '+')){
            if(trimmed[i] === '-'){
                negative = true
            }else{
                continue
            }
        }else if(Number.isNaN(parseInt(trimmed[i]))){
            console.log(parseInt(trimmed[i]), i)
            break;
        }else{
            res += trimmed[i]
            console.log(res)
        }
    }
    
    if(res === '') return 0
    
    if(negative){
        console.log('neg')
        if(parseInt(res) * -1 < Math.pow(-2, 31)){
            return Math.pow(-2, 31)
        }else{
            return parseInt(res) * -1
        }
    }
    
    if(parseInt(res) > Math.pow(2,31) -1){
        return Math.pow(2,31) -1
    }else{
        return parseInt(res)
    } 
};