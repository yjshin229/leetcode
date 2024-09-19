/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    let column = 0;
    let temp=[]
    if(numRows === 1){
        return s
    }else{
        column = Math.trunc(s.length / (numRows + numRows -2)) *  (numRows -2) + Math.trunc(s.length / (numRows + numRows -2)) + (s.length % (numRows + numRows -2) ? 1 : 0)
    
        temp = Array(numRows).fill().map(() => Array(column).fill(" "));
    }
    
    
    
    
    let dir = 'D'
    let idx = 0
    let r = 0, c = 0;
    
    while(idx <= s.length -1){
        temp[r][c] = s.charAt(idx);
        idx ++;
        if(dir === 'D'){
            if(r=== temp.length -1){
                dir = 'U'
                r--;
                c++;
            }else{
                r++;
            }
            
        }else{
            if(r=== 0){
                dir = 'D'
                r++;
            }else{
               r--;
                c++;
            }
            
        }
    }
    let res = ""
   
    for(let r = 0; r<temp.length; r++){
        res += temp[r].filter((c) => c!== " ").join("")
    }
    
    return res
};