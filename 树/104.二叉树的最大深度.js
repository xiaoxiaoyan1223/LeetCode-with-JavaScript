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
//DFS算法
var maxDepth = function(root) {
    if(!root) return 0;
    let leftMaxlength=maxDepth(root.left)
    let rightMaxlength=maxDepth(root.right)
    return Math.max(leftMaxlength,rightMaxlength)+1;
};
//栈的方法()
// var maxDepth=function(root) {
//     if(!root) return 0;
//     const stack=[root];
//     let num=0;
//     while(stack.length){
//         num++;
//         let len=stack.lenght
//         while(len--){
//             const o=stack.shift()
//             o.left&&stack.push(o.left)
//             o.right&&stack.push(right)
//         }
//     }
//     return num;
// }