// /**
//  * @param {string} s1
//  * @param {string} s2
//  * @return {boolean}
//  */
// var checkInclusion = function(s1, s2) {

//     let s1Map = new Map()
//     for(const char of s1){
//         {s1Map.has(char)? s1Map.set(char, s1Map.get(char)+1) : s1Map.set(char, 1)} 
//     }

//     let idx = s1.length
//     let s2Map = new Map

//     while(idx <= s2.length){
//         const curr = s2.slice(idx - s1.length,idx)
//         console.log(curr)
//         if(permArr.includes(curr)) return true
//         idx++
//     }

//     return false
    
// };
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false; // Early return if s1 is longer than s2

    const s1Map = new Array(26).fill(0); // Frequency map for s1
    const s2Map = new Array(26).fill(0); // Frequency map for sliding window in s2

    const aCharCode = 'a'.charCodeAt(0);  // For calculating index from 'a' to 'z'

    // Initialize the frequency map for s1 and the first window in s2
    for (let i = 0; i < s1.length; i++) {
        s1Map[s1.charCodeAt(i) - aCharCode]++;
        s2Map[s2.charCodeAt(i) - aCharCode]++;
    }

    // Helper function to compare two frequency maps
    const matches = (arr1, arr2) => {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };

    // Slide the window over s2
    for (let i = s1.length; i < s2.length; i++) {
        if (matches(s1Map, s2Map)) return true;

        // Update the sliding window: add the new character and remove the old one
        s2Map[s2.charCodeAt(i) - aCharCode]++;
        s2Map[s2.charCodeAt(i - s1.length) - aCharCode]--;
    }

    // Check the final window
    return matches(s1Map, s2Map);
};
