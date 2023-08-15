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
var preorderTraversal = function(root) {
    //递归方式
    // let arr=[]
    // var fun=(node)=>{
    //     if(node){
    //     //先遍历根节点
    //     arr.push(node.val)
    //     //左节点
    //     fun(node.left);
    //     //右节点
    //     fun(node.right)
    //     }
    // }
    // fun(root)
    // return arr
    //栈的形式
    if(!root) return[];
    let arr=[];
    //根节点入栈
    let stack=[root];
    while(stack.length){
        let o=stack.pop()
        arr.push(o.val)
        o.right&&stack.push(o.right)
        o.left&&stack.push(o.left)
    }
    return arr
};