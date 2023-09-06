/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length===1) return 0
    if(nums.length===2) return nums[0]>nums[1]?0:1
    for(let i=0;i<nums.length;i++){
        if(i===0 && nums[0]>nums[1]) return i
        if(i===nums.length-1 &&nums[i]>nums[i-1]) return i
        if(nums[i]>nums[i-1] && nums[i]>nums[i+1]){
            return i
        }
    }
};