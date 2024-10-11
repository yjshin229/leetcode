/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let temp = ""
    let res = []
    for(let i = s.length -1; i>=0; i-- ){
        if(s[i] !== "-" && temp.length !== k){
            temp = s[i].toUpperCase() + temp
        }else if(s[i] !== "-" && temp.length === k){
            res.unshift(temp)
            temp = ""
            temp = s[i].toUpperCase() + temp
        }else{
            continue
        }
    }
    if(temp) res.unshift(temp)
    if(!res.length || res[0].length < 1) return ""
    return res.join("-")
};