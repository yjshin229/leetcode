/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let tree1 = []
    let tree2 = []

    const traverse = (node, arr) => {
       if (!node) {
            arr.push(null); 
            return;
        }
        arr.push(node?.val)
        traverse(node.left, arr)
        traverse(node.right, arr)
    }

    traverse(p, tree1)
    traverse(q, tree2)

    console.log(tree1, tree2)

    if(tree1.length === tree2.length){
        for(let i = 0; i< tree1.length; i++){
            if(tree1[i] !== tree2[i]){
                return false
            }
        }
        return true
    }else{
        return false
    }
};