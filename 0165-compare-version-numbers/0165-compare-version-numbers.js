/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split(".")
    let v2 = version2.split(".")
    
    const length = Math.max(v1.length, v2.length)
    
    
    
    for(let i = 0; i< length; i++){
        if(i > v1.length -1) v1.push("0")
        if(i > v2.length -1) v2.push("0")
        
        const v1Curr = parseInt(v1[i])
        const v2Curr = parseInt(v2[i])
        
        if(v1Curr > v2Curr) return 1
        else if (v1Curr < v2Curr) return -1
    }
    
    return 0
};