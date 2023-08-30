/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//     var len=nums.length
//     if(len<=21) return true
//     for(let i=1;i<=nums[0];i++){
//         //只能通过部分测试 不可行
//         if(i+nums[i]+nums[i+nums[i]]>=len-1){
//             return true
//         }
//     }
//     return false
// };
var canJump=function(nums){
    let q=nums.length-1
    //逆序思维 从后往前寻找可行路径
    for(let p=nums.length-2;p>=0;p--){
        //判断当前值能不能到达目标下标
        if(q-p<=nums[p]){
            q=p
        }
    }
    return q==0
}