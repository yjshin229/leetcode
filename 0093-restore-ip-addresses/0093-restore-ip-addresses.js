/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(s.length < 4 || s.length > 12) return []
    
    let res = []
  
    const backTrack = (temp, str, count) => {
        if(count === 0 && str.length === 0){
            res.push(temp)
        }
        if(count === 0){
            return
        }
        for(let i =0 ; i < 4; i++){
            if(i >= str.length ) break;
            let curr = str.slice(0,i+1)
            console.log(curr)
            if(parseInt(curr) >255 || curr.length > 1 && curr[0] === "0") return; 
            backTrack(temp + (count === 4 ? "": ".") + curr, str.slice(i+1), count-1)
        }
        
    }
    
    backTrack("", s, 4)
    return res
};