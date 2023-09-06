/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(nums.length===0) return [-1,-1]
    let flag=0
    let star=nums.indexOf(target)
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target) {
            flag++
        }
    }
    if(flag) return [star,star+flag-1]
    else return [-1,-1]
};