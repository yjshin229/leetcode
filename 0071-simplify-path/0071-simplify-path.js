/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let res = []
    let temp = ''
    
    const popDir = () => {
        if(res.length === 1){
            return
        }else{
            res.pop()
        }
        let idx = res.length-1
        while(res[idx] !== '/'){
            res.pop()
            idx --;
        }
        
    }
    
    const checkPeriod = () => {
        if(temp.length === 1){
            if(res.length === 1){
                temp = ''
                return
            }
            res.pop()
        }else if(temp.length === 2){
            popDir()
        }else{
            res.push(temp)
        }
        
        temp = ''
    }
    
    
    for(const char of path){
        if(char === '/'){
            if(temp) {
                if(res[res.length-1] === '/' ){
                   checkPeriod()
                }else{
                    res.push(temp)
                    temp = ''
                }
                
            }
            if(res[res.length-1] !== '/'){
                res.push(char)
            }
        }else if(char === '.'){
            temp += char;
        }else{
            if(temp){
                res.push(temp)
                temp = ''
            }
            res.push(char)
        }
    }
    
    if(temp){
        if(res[res.length-1] !== '/'){
            res.push(temp)
            temp = ''
        }else{
            checkPeriod()
        }
    } 
    
    if(res[res.length-1] === '/' && res.length !== 1) {
        res.pop()
        return res.join("")
    }else{
        return res.join("")
    }
    console.log(res)
};