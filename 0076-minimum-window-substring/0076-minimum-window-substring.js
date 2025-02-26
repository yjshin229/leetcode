/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    let t_freq = new Map();
    for (let char of t) {
        t_freq.set(char, (t_freq.get(char) || 0) + 1);
    }

    let required = t_freq.size;
    let l = 0, r = 0;
    let window_freq = new Map();
    let formed = 0;
    let minLen = Infinity, minStart = 0;

    while (r < s.length) {
        let char = s[r];
        window_freq.set(char, (window_freq.get(char) || 0) + 1);

        if (t_freq.has(char) && window_freq.get(char) === t_freq.get(char)) {
            formed++;
        }

        while (formed === required) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                minStart = l;
            }

            let leftChar = s[l];
            window_freq.set(leftChar, window_freq.get(leftChar) - 1);

            if (t_freq.has(leftChar) && window_freq.get(leftChar) < t_freq.get(leftChar)) {
                formed--;
            }
            l++;
        }
        r++;
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};