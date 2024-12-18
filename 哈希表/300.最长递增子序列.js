var lengthOfLIS = function(nums) {
    if(nums.length <= 1){
        return nums.length;
    }
    let n = nums.length;
    let maxLength = 0;
    let dp = [];
    // dp数组的每个元素dp[i]用于表示以nums[i]为结尾的最长递增子序列的长度。
    // 初始化dp[0] = 1，是因为以数组中第一个元素为结 尾的最长递增子序列长度必然是1
    dp[0] = 1;
    for(let i = 1;i<n;i++){
      // 记录当前最大长度
        let max = 0;
        // 倒着来
        for(let j = i-1; j >= 0 ;j--){
            // 只要出现比num[i]小  则比较是否有max大 然后好接上
            if(nums[j] < nums[i]){
                 max = Math.max(dp[j],max);
            }
        }  
        // 只要max不变都是一样的 初始化时max为0  后续如果nums[i-1]<nums[i] max则更新为dp[i-1]
        dp[i] = max + 1;
        maxLength = Math.max(maxLength, dp[i]);
    }
    return maxLength;
};


