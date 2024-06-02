/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!postorder.length||!inorder.length) return null;
    // 获取根节点
    const val=postorder[postorder.length-1]
    // 创建根节点
    let node=new TreeNode(val)
    // 中序遍历 左中右 
    let index=inorder.indexOf(val)
    node.left=buildTree(inorder.slice(0,index),postorder.slice(0,index))
    node.right=buildTree(inorder.slice(index+1),postorder.slice(index,postorder.length-1))
    return node

};
