/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;  // Base case: if the node is null, just return null

    // Recursively invert the left and right subtrees
    let left = invertTree(root.left);
    let right = invertTree(root.right);

    // Swap the left and right children of the current node
    root.left = right;
    root.right = left;

    return root;  // Return the root of the inverted tree
};
