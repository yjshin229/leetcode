/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {

    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b)
    let child = 0;
    let cookie = 0;
    
    while (child < g.length && cookie < s.length) {
        // If the current cookie can satisfy the current child
        if (s[cookie] >= g[child]) {
            child++; // Move to the next child
        }
        cookie++; // Move to the next cookie
    }
    
    return child;
};