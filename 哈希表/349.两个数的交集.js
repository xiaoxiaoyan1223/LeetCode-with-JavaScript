/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // 方法一
    // const set1=new Set(nums1)
    //  const set2=new Set(nums2)
    // var set=new Set()
    // for(let item of set1){
    //     if(set2.has(item) && !set.has(item)){
    //         set.add(item)
    //     }
    // }
    // return [...set];
    // 方法二
    const set=new Set(nums2)
    return [...new Set(nums1)].filter(val=>set.has(val))
};