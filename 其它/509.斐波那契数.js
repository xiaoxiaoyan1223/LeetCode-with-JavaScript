/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // 递归的方法 时间复杂度O(2^n)
    // if(n===1) return 1
    // if(n===2) return 1
    // return fib(n-2)+fib(n-1)

    // 数组的方法 dp[i]=dp[i-1]+dp[i-2]  时间复杂度O(n) 空间复杂度O(n)
    // if(n<2) return n
    // const dp=[]
    //  dp[0]=0
    //  dp[1]=1
    // for(let i=2;i<=n;i++){
    //     dp[i]=dp[i-1]+dp[i-2]
    // }
    // return dp[n]

    // 降低空间复杂度 空间复杂度O(1) 时间复杂度O(n)
    let pre1=0
    let pre2=1
    let temp
    if(n===0) return 0
    if(n===1) return 1
    for(let i=2;i<=n;i++){
        temp=pre2
        pre2=pre1+pre2
        pre1=temp
    }
    return pre2
};
