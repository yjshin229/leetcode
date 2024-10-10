/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    if(pattern.length !== s.split(" ").length) return false
    
    let patternMap = new Map()
    const sArr = s.split(" ");
    
    console.log(sArr)
    
    function getKeyByValue(map, searchValue) {
      for (let [key, value] of map.entries()) {
        if (value === searchValue) {
          return key;
        }
      }
      return undefined; // Value not found
    }
    
    for(let i = 0; i < pattern.length; i++){
        const currPattern = pattern[i];
        const patternWord = patternMap.get(currPattern);
        console.log(currPattern, patternWord)
        if(patternWord){
            if(patternWord !== sArr[i]){
                return false
            }
        }else{
            if(getKeyByValue(patternMap, sArr[i])){
              return false  
            }
            patternMap.set(currPattern, sArr[i])
        }
        
    }
    return true
    
    
};