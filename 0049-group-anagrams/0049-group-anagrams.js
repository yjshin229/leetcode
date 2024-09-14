/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = []
    let unique = []

    if(strs.length === 1){
        return [strs]
    }
    let sorted = []
    for(var i = 0; i<strs.length; i++){
        sorted.push(strs[i].split("").sort().join(""))
    }
    
    unique = [...new Set(sorted)];
    
    const addDup = (sorted, target) => {
        let temp = [];
        for(let i = 0; i < sorted.length; i++){
            if(target === sorted[i]){
                temp.push(strs[i])
            }
        }
        res.push(temp);
    }
    
    for (let i = 0; i < unique.length; i++){
        const target = unique[i];
        addDup(sorted, target);
    }
    
    
   return  res
};