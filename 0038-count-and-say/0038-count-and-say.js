/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    
    const getRLE = (str) => {
        
        if(str === '0') return '1'
        let res = ''
       
        let temp = ''
        for(const char of str){
            if(temp === '' || temp[0] === char){
                temp += char
            }else{
                res += temp.length.toString() + temp[0]
                temp = char
            }
        }
        res += temp.length.toString() + temp[0] 
        
        return res
    }
    
    let curr = '0'
    for (let i = 0; i<n; i++){
        
        curr = getRLE(curr)
    }
    
    return curr.toString()
};