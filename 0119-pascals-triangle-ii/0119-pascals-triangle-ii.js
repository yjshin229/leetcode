/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = []
    for(let i = 0; i <= rowIndex; i++){
        if(i === 0){
            res.push([1])
        }else if (i === 1){
            res.push([1,1])
        }else{
            let temp = []
            for(let j = 0; j <= res[i-1].length; j++){
                if(j === 0 || j === res[i-1].length){
                    temp.push(1)
                }else{
                    temp.push(res[i-1][j-1] + res[i-1][j])
                }
            }
            res.push(temp)
        }
    }
    return res[res.length-1]
};