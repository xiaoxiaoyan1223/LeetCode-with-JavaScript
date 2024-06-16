/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
    // // 遍历二维数组  超时
    // const row=matrix.length
    // const col=matrix[0].length
    // for(let i=0;i<row;i++){
    //     for(let j=0;j<col;j++){
    //        if(matrix[i][j]===target) return true
    //     }
    // }
    // return false

    // 利用二分查找  超时
//     for(const row of matrix){
//         const index=search(row,target)
//         if(index>=0) return true
//     }
//     return false
    
// };
// const search=(nums,target)=>{
//          let low=0,high=nums.length-1
//         while(low<=high){
//             const mid=Math.floor((high-low)/2)+low
//             const num=nums[mid]
//             if(num===target) return mid
//             else if(num>target){
//                 high=mid-1
//             }else{
//                 low=mid+1
//             }
//         }
//          return -1
//     }
  var searchMatrix = function(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    // 从右上角找
    let x = 0, y = n - 1;
    // 循环终止条件
    while (x < m && y >= 0) {
        if (matrix[x][y] === target) {
            return true;
        }
        // 最右边的值大于target 说明这一列都大于target 排除
        if (matrix[x][y] > target) {
            y--;
        } else {
            // 最右边的值小于target 说明这一排都小于target 排除
            x++;
        }
    }
    return false;
};

// 时间复杂度O(m+n)  空间复杂度O(1)
