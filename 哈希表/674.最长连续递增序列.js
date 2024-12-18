/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法一
var findLengthOfLCIS = function(nums) {
    let max=0
    let count=1
    for(let i=0;i<nums.length;i++){
        if(nums[i]<nums[i+1]){
            count++
        }else{
            max=Math.max(max,count)
            count=1
        }
    }
    return max
};

// 方法二 指针
var findLengthOfLCIS = function(nums) {
   let max=0,l=0
   for(let i=0;i<ums.length;i++){
     if(nums[i-1]>nums[i]&&i>=l){
       l=i
     }
     max=Math.max(max,i-l+1)
   }
  return max
};
