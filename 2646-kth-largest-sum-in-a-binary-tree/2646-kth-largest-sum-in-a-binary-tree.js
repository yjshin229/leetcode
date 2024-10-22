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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    if(!root) return -1
    let data = []
    let queue = [root]; 

    while(queue.length){
        let levelSize = queue.length;  
        let levelSum = 0;  

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();  
            levelSum += node.val;  

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        data.push(levelSum)
    }

    data.sort((a,b) => b-a)

    if(data.length < k) return -1
    return data[k-1]
};