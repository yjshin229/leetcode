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
    let count = 0

    const dfs = (node) => {
        frequency[node.val] = (frequency[node.val] || 0 )+ 1
        count ++

        if(node.left) dfs(node.left)
        if(node.right) dfs(node.right)
    
    }

    dfs(root)
    let max = 0
    let res = []
    console.log(frequency)
    for(const key in frequency){
        console.log(key)
        let value = frequency[key]
        if (value > max){
            res = [parseInt(key)]
            max = value
        }else if(value === max){
            res.push(parseInt(key))
        }
    }

    return res
    
};