/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums=[...nums1,...nums2]
    nums.sort((a,b)=>a-b)
    let len=nums.length
    if(len%2!==0) return nums[Math.floor(len/2)]
    return (nums[len/2-1]+nums[len/2])/2
    // console.log(nums)

};