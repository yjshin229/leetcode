/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = []
    let temp = []
    if(nums.length === 0) return res
    
    for(let i =0; i < nums.length; i++){
        if(temp.length){
            if(temp[temp.length -1] + 1 === nums[i]){
                temp.push(nums[i])
            }else{
                if(temp.length === 1) {
                    res.push(`${temp[0]}`)
                }else{
                    res.push(`${temp[0]}->${temp[temp.length -1]}`) 
                }
                
                temp = [nums[i]]
            }
        }else{
            temp.push(nums[i])
        }
    }

    if(temp.length === 1) {
        res.push(`${temp[0]}`)
    }else{
        res.push(`${temp[0]}->${temp[temp.length -1]}`) 
    }
    return res
};