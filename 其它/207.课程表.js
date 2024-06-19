/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // 如果没有先决条件，即所有的课程都没有依赖关系
    if(prerequisites.length===0){
        return true
    }
    // 维护入度表
    let inDegree=new Array(numCourses).fill(0)
    // 维护邻接表
    let adj=new Map()
    for(let e of prerequisites){
        // 记录有入度的 学习这门课程需要完成哪些课程
        inDegree[e[0]]++
        // 先学e[0]要先完成e[1]
        // 记录没有先决条件的课程  入度为0
        if(!adj.has(e[1])) adj.set(e[1],[])
        let vEdge=adj.get(e[1])
        // 这个e[0]是有先决条件的 记录学习完e[1]可以学习的课程
        vEdge.push(e[0])
    }
    let queue=[]
    // 首先加入入度为0的
    for(let i=0;i<numCourses;i++){
        if(inDegree[i]==0){
            queue.push(i)
        }
    }
    while(queue.length>0){
        // 从队首移除
        var v=queue.shift()
        // 出队一门课程
        numCourses--
        if(!adj.has(v)) continue
        // 遍历当前出队节点的所有邻接节点
        for(let w of adj.get(v)){
            inDegree[w]--
            if(inDegree[w]==0){
                queue.push(w)
            }
        }
    }
    return numCourses===0
};
