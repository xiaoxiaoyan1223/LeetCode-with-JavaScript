/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 方法一：使用除法
// var productExceptSelf = function(nums) {
//   let res = [];
//   let zeroCount = 0;
//   // 除0之外的数的乘积
//   let totalVal = 1;
//   for(let val of nums){
//       val ? (totalVal *= val) : (zeroCount++);
//   }
//   for(let val of nums){
//       let countVal = 1;
//       if(val == 0){
//           (zeroCount > 1) ? (countVal = 0) : (countVal = totalVal)
//       }else{
//           (zeroCount > 0) ? (countVal = 0) : (countVal = totalVal/val)  
//       }
//       res.push(countVal)
//   }
// };
// 方法二
var productExceptSelf=function(nums){
    let len=nums.length
    const res=[];
    res[0]=1
    //从左往右遍历，记录res[i]为当前nums[i]之前的所有数乘积
    for(let i=1;i<len;i++){
        res[i]=res[i-1]*nums[i-1]
    }
    let rightAll=1
    for(let j=len-1;j>=0;j--){
        //当前位左边的所有数乘积×右边所有数乘积
        res[j]*=rightAll
        //记录当前位右边的所有数乘积 
        rightAll*=nums[j]
    }
    return res
}