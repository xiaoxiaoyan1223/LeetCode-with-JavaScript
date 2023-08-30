/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var len=nums.length
    let cover=nums[0]
    let tempCover=0
    let step=1
    let ready=0
    if(nums.length===1) return 0
    while(ready<nums.length-1){
        tempCover=Math.max(nums[ready]+ready,tempCover)
        if(ready==cover){
            cover=tempCover
            step++
        }
        ready++
    }
    return step
};