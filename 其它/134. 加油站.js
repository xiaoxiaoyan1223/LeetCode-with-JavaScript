/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // 当前起点总剩余油量
    let curSum=0
    // 全程总剩余油量
    let totalSum=0;
    // 初始化起点为0
    let start=0
    // 从每个起点开始模拟
    for(let i=0;i<gas.length;i++){
        curSum+=gas[i]-cost[i]
        totalSum+=gas[i]-cost[i]
        // 出发前剩余油量小于等于零则不能到达下一站,[0,i]之间都不能作为起点
        if(curSum<0) {
            curSum=0
            start=i+1
        }
    }
    // 如果总油量-消耗油量<0则一定不能跑完全程
    if(totalSum<0) return -1
    return start
};
