/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const treeMap = new Map()
    for(let i = 0; i < inorder.length; i++){
        treeMap.set(inorder[i], i)
    }

    let rootIndex = 0

    const build = (start,end) => {
        if(start > end) return null;

        const rootVal = preorder[rootIndex++];
        const root = new TreeNode(rootVal);
        const mid = treeMap.get(rootVal);

        root.left = build(start, mid - 1);
        root.right = build(mid + 1, end);

        return root;
    }

    return build(0, preorder.length - 1)
};