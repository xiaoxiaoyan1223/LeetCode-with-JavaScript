/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 动态方程 相邻房间不可偷窃 
    // 所以到达第i个房间所拥有的财务要么是上一个截止上个房间偷窃的财产和；要么是第i-2个房间加上这个房间的财务
    // dp[i]=Math.max(dp[i-1],dp[i-2]+num)
    const n=nums.length
    if(n==0) return 0
    // 初始化 
    const dp=[]
    // 这里dp[0]=0可以避免只有两个房间时出错
    dp[0]=0
    dp[1]=nums[0]
    for(let i=2;i<=n;i++){
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i-1])
    }
    return dp[n]
};
