/**
 * @param {number[]} prices
 * @return {number}
 */
 //方法一
// var maxProfit = function(prices) {
//     const n=prices.length
//     const dp=new Array(n).fill(0).map(v=>new Array(2).fill(0))
//     dp[0][0]=0
//     dp[0][1]=-prices[0]
//     for(let i=1;i<n;i++){
//         dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
//         dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]-prices[i])
//     }
//     return dp[n-1][0]
// };
//方法二 
var maxProfit=function(prices){
    let ans=0
    for(let i=1,len=prices.length;i<len;i++){
        //只要明天比今天高就买 当天卖当天还可以再买入
        ans+=Math.max(0,prices[i]-prices[i-1])
    }
    return ans
}