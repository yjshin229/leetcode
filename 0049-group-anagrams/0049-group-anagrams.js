/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = []
    let unique = []
    let used = []

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
        let used = []
        for(let i = 0; i < sorted.length; i++){
            if(target === sorted[i]){
                temp.push(strs[i])
                used.push(i)
            }
        }
        
        res.push(temp);
    }
    
    for (let i = 0; i < unique.length; i++){
        const target = unique[i];
        addDup(sorted, target);
        strs = strs.filter((value, index) => !used.includes(index))
        sorted = sorted.filter((value, index) => !used.includes(index))
        used = []
    }
    
    
   return  res
};