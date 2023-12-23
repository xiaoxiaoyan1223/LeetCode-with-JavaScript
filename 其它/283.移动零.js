/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slowIndex=0;
    // 遍历数组，使用快指针 fastIndex 遍历每个元素
    for(let fastIndex=0;fastIndex<nums.length;fastIndex++){
        if(nums[fastIndex]!==0){
             // 如果当前元素不为 0，则将其与慢指针指向的元素交换位置，并将慢指针向后移动一位
            [nums[slowIndex],nums[fastIndex]]=[nums[fastIndex],nums[slowIndex]];
            slowIndex++;
        }
    }
    // 函数没有返回值，因为数组会被原地修改
};