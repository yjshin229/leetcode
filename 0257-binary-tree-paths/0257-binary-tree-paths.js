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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = []
    if(!root.left && !root.right) return [root.val.toString()]
    
    function dfs(node, path) {
        if (!node) return;
        path.push(node.val.toString());
        if (!node.left && !node.right) {
            res.push(path.join('->'));
        } else {
            dfs(node.left, [...path]); 
            dfs(node.right, [...path]);
        }
    }
    
    dfs(root, []);
    return res;
    
};