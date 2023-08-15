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
var inorderTraversal = function(root) {
    let arr=[]
    const fun=(root)=>{
        if(!root) return [];
        fun(root.left)
        arr.push(root.val)
        fun(root.right)
    }
    fun(root)
    return arr;
};