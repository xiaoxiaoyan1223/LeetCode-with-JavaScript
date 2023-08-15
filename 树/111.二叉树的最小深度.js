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
var minDepth = function(root) {
    if(!root) return 0;
    const stack=[[root,1]]
    while(stack.length){
        const [o,n]=stack.shift();
        if(!o.left&&!o.right){
            return n
        }
        if(o.right) stack.push([o.right,n+1])
        if(o.left) stack.push([o.left,n+1])
    }
};