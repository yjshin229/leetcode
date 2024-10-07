/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;  // Pointer for string a
    let j = b.length - 1;  // Pointer for string b
    let carry = 0;         // Carry for the sum
    let result = [];       // Array to store the result

    // Loop through both strings from right to left
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;  // Start with the carry

        // Add the current digit of a, if available
        if (i >= 0) {
            sum += parseInt(a[i]);
            i--;
        }

        // Add the current digit of b, if available
        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }

        // Append the binary digit of the sum to the result
        result.push(sum % 2);  // Get the remainder (0 or 1)
        carry = Math.floor(sum / 2);  // Calculate the new carry
    }

    // Reverse the result array and join it to form the binary string
    return result.reverse().join('');
};
