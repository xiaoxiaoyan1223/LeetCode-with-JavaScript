/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length===0) return []
    const res=[]
    let top=0,bottom=matrix.length-1,left=0,right=matrix[0].length-1
    while(top<bottom&&left<right){
        //上边
        for(let i=left;i<right;i++) res.push(matrix[top][i])
        //右层
        for(let i=top;i<bottom;i++) res.push(matrix[i][right])
        //下层
        for(let i=right;i>left;i--) res.push(matrix[bottom][i])
        //左层
        for(let i=bottom;i>top;i--) res.push(matrix[i][left])
        // 缩小一圈
        top++
        right--
        left++
        bottom--
    }
    //如果只剩下一行,从左向右依次添加
    if(top===bottom){
        for(let i=left;i<=right;i++) res.push(matrix[top][i])
    }else if(left===right){
        for(let i=top;i<=bottom;i++) res.push(matrix[i][left])
    }
    return res
};