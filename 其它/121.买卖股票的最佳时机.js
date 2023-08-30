/**
 * @param {number[]} prices
 * @return {number}
 */
 //方法一：暴力解法 结果正确但是超时
// var maxProfit = function(prices) {
//     var max=0
//     for(let i=0;i<prices.length;i++){
//         for(let j=i+1;j<prices.length;j++)
//         {
//             var p=prices[j]-prices[i]
//             // console.log(p)
//             if(p>max){
//                 max=p
//                 // console.log(max)
//             }
//         }
//     }
//     return max
// };
var maxProfit=function(prices){
    const len=prices.length
    if(len<2) return 0
    let res=0,minPrice=prices[0]
    for(let i=1;i<len;i++){
        //用当前值 减去 排在它之前最小的值，得到的就是和当前值的最大差值
        res=Math.max(res,prices[i]-minPrice)
        minPrice=Math.min(prices[i],minPrice)
    }
    return res
}