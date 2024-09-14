/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    if(strs.length === 1){
        return [strs]
    }
    let sorted = []
    
    for(var i = 0; i<strs.length; i++){
        sorted.push(strs[i].split("").sort().join(""))
    }
    
    let hashmap = new Map();
    
    for(let i = 0; i < sorted.length; i++){
        if(!hashmap[sorted[i]]){
            hashmap[sorted[i]] = []
        }
        hashmap[sorted[i]].push(strs[i]);
    }
    
   return Object.values(hashmap);
};