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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let closest 

    const dfs = (node) => {

        if(closest === undefined){
            closest = node.val
        } else if(Math.abs(target - node.val) < Math.abs(target - closest)){
            closest = node.val
        } else if(Math.abs(target - node.val) === Math.abs(target - closest)){
            if(node.val < closest){
                closest = node.val
            }
        }
        if(node.left) dfs(node.left)
        if(node.right) dfs(node.right)
    }

    dfs(root)

    return closest
};