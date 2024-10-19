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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // Helper function to check if two trees are mirror images
    const isMirror = (left, right) => {
        if (!left && !right) return true; // Both nodes are null
        if (!left || !right) return false; // One node is null
        return (
            left.val === right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        );
    };

    return isMirror(root.left, root.right);
};
