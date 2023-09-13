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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false
    // 递归+dfs
    let res=false
    const dfs=(root,sum)=>{
        if(!root) return;
      
        if(sum===targetSum&&(!root.left&&!root.right)){
            res=true
        }
        if(root.left) dfs(root.left,sum+root.left.val)
        if(root.right) dfs(root.right,sum+root.right.val)
    }
    dfs(root,root.val)
    return res
};