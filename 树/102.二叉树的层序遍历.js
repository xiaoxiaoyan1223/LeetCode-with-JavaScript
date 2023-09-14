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
var levelOrder = function(root) {
    if(!root) return []
    const result=[]
    //初始化队列 将根节点加入队列
    const queue=[root]
    while(queue.length>0){
        const curLevelSize=queue.length
        //保存当前层的值
        const currLevelVal=[]
        //遍历当前层的所有节点
        for(let i=0;i<curLevelSize;i++){
            const currentNode=queue.shift()
            currLevelVal.push(currentNode.val)
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        result.push(currLevelVal)
    }
    return result
};