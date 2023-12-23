
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []
    nums.sort((a, b) => a - b)
    res = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue
         // 计算目标值 target，即两数之和为 -nums[i]
        const target = -nums[i]
        let left = i + 1, right = nums.length - 1
         // 在左右指针之间寻找符合要求的两个数
        while (left < right) {
            const sum = nums[left] + nums[right]
            if (sum == target) {
                res.push([nums[i], nums[left], nums[right]])
                // 去重，跳过与当前数相同的数
                while (left < right && nums[left] == nums[++left]);
                while (left < right && nums[right] == nums[--right]);
            } else if (sum < target) {
                // 如果两数之和小于目标值，则将左指针向右移动
                left++
            } else {
                // 如果两数之和大于目标值，则将右指针向左移动
                right--
            }
        }
    }
    return res
};
