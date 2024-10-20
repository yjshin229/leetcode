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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return 0

    const dfs = (node, sum) => {
        sum += node.val

        if(!node.left && !node.right){
            return sum === targetSum
        }

        let leftHasPath = node.left ? dfs(node.left, sum) : false;
        let rightHasPath = node.right ? dfs(node.right, sum) : false;

        return leftHasPath || rightHasPath
    }

    return dfs(root, 0)
    
};