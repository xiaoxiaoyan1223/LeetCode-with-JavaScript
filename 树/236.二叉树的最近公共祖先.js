/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const fun=(node)=>{
        if(!node) return false
        let left=fun(node.left)
        let right=fun(node.right)
        if(node===p||node===q){
            if(left||right) throw node
            else return true
        }
        else{
            if(left&right) throw node
            else return left^right
        }
    }
    try{
        return fun(root)
    }
    catch(e){
        return e
    }
};