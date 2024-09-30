/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    if(s === t) return false
    
    const sLen = s.length
    const tLen = t.length
    const diff = sLen - tLen
    
    const del = () => {
        for(let i = 0; i < sLen; i++){
            if(i > tLen -1){
                s = s.slice(0,i)
                return
            }
            if(s[i] !== t[i]){
                s = s.slice(0,i) + s.slice(i+1)
                return
            }
        }
    }
    
    const ins = () => {
         for(let i = 0; i < tLen; i++){
            if(i > sLen -1){
                s += t[i]
                return
            }
            if(s[i] !== t[i]){
                s = s.slice(0,i) + t[i] + s.slice(i)
                return
            }
        }
    }
    
    const rep = () => {
         for(let i = 0; i < sLen; i++){
            if(s[i] !== t[i]){
                s = s.slice(0,i) + t[i] + s.slice(i+1)
                return
            }
        }
    }
    
    switch (diff) {
        case 1 :
            del()
            break
        case -1 :
            ins()
            break;
        case 0:
            rep()
            break;
        default:
            return false;
    }
        
        if(s === t) return true
        return false
    
};