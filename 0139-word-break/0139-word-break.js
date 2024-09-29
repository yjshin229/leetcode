/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict); // To speed up lookups
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // Base case: an empty string can be segmented
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            const word = s.slice(j, i); // Check substring from j to i
            if (dp[j] && wordSet.has(word)) {
                dp[i] = true;
                break; // No need to check further once we know dp[i] is true
            }
        }
    }
    
    return dp[s.length];
};
