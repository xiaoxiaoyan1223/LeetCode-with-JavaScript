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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const list=[]
    //先序遍历二叉树 然后构造链表
    var preorderTraversal=(root,list)=>{
        if(root!==null){
            list.push(root)
            preorderTraversal(root.left,list)
            preorderTraversal(root.right,list)
        }
    }
    preorderTraversal(root,list)
    const len=list.length
    for(let i=1;i<len;i++){
        const pre=list[i-1],cur=list[i]
        pre.left=null
        pre.right=cur
    }
};
