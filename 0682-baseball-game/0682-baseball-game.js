/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = []
    let sum = 0;
    for(let i =0; i < operations.length; i++){
        switch(operations[i]){
            case "+" : 
                stack.push(stack[stack.length-2] + stack[stack.length-1]);
                sum+= stack[stack.length-1];
                break;
            case "C":
                let temp = stack.pop();
                sum -= temp;
                break;
            case "D":
                stack.push(stack[stack.length -1]*2)
                sum+= stack[stack.length-1];
                break;
            default:
                stack.push(parseInt(operations[i]));
                sum += parseInt(operations[i]);
        }
    }
    return sum;
};