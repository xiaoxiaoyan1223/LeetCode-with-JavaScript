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
var maxPathSum = function(root) {
    if(!root) return null
    let maxSum=Number.NEGATIVE_INFINITY
    //dfs+递归
    const dfs=(node)=>{
        if(!node) return 0
        const leftSum = dfs(node.left); // 递归计算左子树的最大路径和  
        const rightSum = dfs(node.right); // 递归计算右子树的最大路径和 
        // 计算以当前节点为根的最大路径和  
        const currSum = node.val + rightSum+leftSum;  
        // 更新全局最大路径和  
        maxSum = Math.max(maxSum, currSum);  

        const res=Math.max(0,leftSum, rightSum) + node.val;  
        return res>0?res:0
    }
    dfs(root)
    return maxSum
};