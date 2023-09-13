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
    //递归+dfs
    let res=0
    const dfs=(root,item)=>{
        if(!root) return 
        item=item+String(root.val)
        if(!root.left&&!root.right){
            res+=Number(item)
        }
        dfs(root.left,item)
        dfs(root.right,item)
    }
    dfs(root,'')
    return res
};