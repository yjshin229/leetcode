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
var findMode = function(root) {
    let frequency = {}
    let max = 0
    let res = []
    const dfs = (node) => {
        frequency[node.val] = (frequency[node.val] || 0 )+ 1

        if(frequency[node.val] > max){
            res = [parseInt(node.val)]
            max = frequency[node.val]
        }else if(frequency[node.val] === max){
            res.push(parseInt(node.val))
        }

        if(node.left) dfs(node.left)
        if(node.right) dfs(node.right)
    
    }

    dfs(root)
    return res
    
};