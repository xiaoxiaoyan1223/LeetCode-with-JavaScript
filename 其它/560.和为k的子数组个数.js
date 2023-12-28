/**
 * @param {number[]} 
 * @param {number} 
 * @return {number}
 */
    var subarraySum = function(nums, k) {
  let res = 0; // 存储结果的变量
  let map = new Map(); // 使用 Map 数据结构来存储前缀和及其出现次数
  let sum = 0; // 当前位置的前缀和
  map.set(0, 1); // 将初始的前缀和 0 存入 map 中，出现次数为 1
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0) {
      // 计算当前位置的前缀和，并将其存入 map 中
      sum += nums[i - 1];
      map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
    }
    // 查看和（累加到当前值 - k）相等的 i 之前的前缀和有多少个，并累加到结果中
    res += map.has(sum + nums[i] - k) ? map.get(sum + nums[i] - k) : 0;
  }
  return res; // 返回结果
};
