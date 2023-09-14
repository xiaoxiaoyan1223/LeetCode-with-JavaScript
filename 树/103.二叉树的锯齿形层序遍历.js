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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []
    const queue=[root]
    const res=[]
    //定义一个标记位 1正序 0逆序
    let flag=1
    while(queue.length>0){
        let currentLevel=[]
        const curLength=queue.length
        for(let i=0;i<curLength;i++){
            const currentNode=queue.shift()
            currentLevel.push(currentNode.val)
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        // console.log(flag)
        if(flag){
            res.push(currentLevel)
        }else{
            res.push(currentLevel.reverse())
            // console.log(currentLevel)
            // console.log(currentLevel.reverse())
        }
        flag=!flag;
    }
    return res
};
