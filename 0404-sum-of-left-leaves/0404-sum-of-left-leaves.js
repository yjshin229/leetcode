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
var sumOfLeftLeaves = function(root) {
    let sum = 0
    
    const dfs = (node, from) => {
        if(from === "left" && !node.left && !node.right){
            sum += node.val
        }

        if(node.left) dfs(node.left, "left")
        if(node.right) dfs(node.right, "right")
    }
    dfs(root)

    return sum
};