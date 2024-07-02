/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // // 先比较0 1的费用 
    const len=cost.length
    // // -1表示没有计算过
    // const memo= new Array(len+1).fill(-1)
    // function dfs(i){
    //     if(i<=1){
    //         return 0
    //     }
    //     if(memo[i]!=-1){
    //         return memo[i]
    //     }
    //     return memo[i]=Math.min(dfs(i-1)+cost[i-1],dfs(i-2)+cost[i-2])
    // }
    // return dfs(len)
    const dp=[]
    // 到达第一个或者第二个台阶是不需要花费的
     dp[0]=0
     dp[1]=0
    // 下标0 1初始化，i从2开始
    for(var i=2;i<=cost.length;i++){
        // 确定动态方程
        // dp[i]=Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
         dp[i]=Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
    }
    return dp[len]
};