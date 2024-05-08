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

方法二  思路一样只是更清晰
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
    //需要借助队列模拟
let res=[],queue=[]
queue.push(root)
if(root===null) return res
while(queue.length!==0){
    // 记录当前层级节点数
    let length=queue.length
    // 存放每一层的节点数
    let curLevel=[]
    for(let i=0;i<length;i++){
        // 把队头节点删除
        let node=queue.shift()
        curLevel.push(node.val)
        node.left&&queue.push(node.left)
        node.right&&queue.push(node.right)
    }
    // 把每一层的结果放到结果数组里面
    res.push(curLevel)
} 
    return res
};
