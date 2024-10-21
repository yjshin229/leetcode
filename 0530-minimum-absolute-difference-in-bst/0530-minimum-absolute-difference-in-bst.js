/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let data = []
    const dfs = (node) => {
        data.push(node.val)
        if(node.left) dfs(node.left)
        if(node.right) dfs(node.right)
    }

    dfs(root)
    data.sort((a,b) => a-b)
    let difference = Math.pow(10, 6)
    if(data.length === 2) return Math.abs(data[0] - data[1])
    for(let i = 1; i < data.length; i++){
        let temp = Math.abs(data[i-1] - data[i])
        if(temp < difference) difference = temp
    }

    return difference

};