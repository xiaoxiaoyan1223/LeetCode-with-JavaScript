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
    if(!preorder.length||!inorder.length) return null;
    //创建根节点
    let node=new TreeNode(preorder[0])
    //找到在中序遍历中根节点的位置
    let index=inorder.indexOf(preorder.shift())
    //左右子树递归
    node.left=buildTree(preorder,inorder.slice(0,index))
    node.right=buildTree(preorder,inorder.slice(index+1))

    return node

};