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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let data = []
    if(!root) return data

    const dfs = (node) => {
        if(node.left) dfs(node.left)
        if(node.right) dfs(node.right)
        data.push(node.val)
    }

    dfs(root)
    return data
};