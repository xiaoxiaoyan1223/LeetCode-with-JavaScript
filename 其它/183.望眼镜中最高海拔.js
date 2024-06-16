/**
 * @param {number[]} heights
 * @param {number} limit
 * @return {number[]}
 */
var maxAltitude = function(heights, limit) {
    if(heights.length===0) return []
    // 定义左右指针 
    let left=0,right=left+limit
    const maxArr=[]
    let max=-999
    for(let i=0;i<heights.length-limit+1;i++){
        for(let j=left;j<right;j++){
            if(heights[j]>max){
                max=heights[j]
            }
        }
        maxArr.push(max)
        max=-999
        left++
        right++
    }
    return maxArr
};
