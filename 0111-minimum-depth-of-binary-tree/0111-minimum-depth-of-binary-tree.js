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
var minDepth = function(root) {
    if(!root) return 0
    let dfs = node => {
        if (!node) return Infinity;
        
        if(!node.left && !node.right){
            return 1
        }
        let leftDepth = node.left ? dfs(node.left) : Infinity; 
        let rightDepth = node.right ? dfs(node.right) : Infinity;

        return Math.min(leftDepth, rightDepth) + 1
    }

    return dfs(root)
};