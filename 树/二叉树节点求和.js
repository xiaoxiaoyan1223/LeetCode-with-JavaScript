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
 * @return {number}
 */
var sumNumbers = function(root) {
    // 遍历二叉树并求和
    const inOrder=(root,sum)=>{
        if(root===null) return 0
        sum+=root.val
        let leftSum=inOrder(root.left,0)
        let rightSum=inOrder(root.right,0)
        return sum+leftSum+rightSum
    }
    return inOrder(root,0)
};

