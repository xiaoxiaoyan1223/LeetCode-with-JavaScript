/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len=nums.length
    let flag=0
    if(len<=2) return len
    let p=2
    let q=2
    while(q<len){
        if(nums[p-2]!=nums[q]){
            nums[p]=nums[q]
            p++
        }
        q++
    }
        return p

}
