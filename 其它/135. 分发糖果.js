/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    //获取数组长度也即初始糖果数量
    const len=ratings.length
    // 最好用个数组同步记录每个小朋友的糖果
    const arr=new Array(len).fill(1)
    // console.log(arr)
    let res=len
    // 比较右边比左边大的情况
    for(let i=0;i<len-1;i++){
        if(ratings[i]<ratings[i+1]){
            // 为了保证相邻分数高的拿的更多，所以在前一个的基础上加1
            arr[i+1]=arr[i]+1
        }
    }
    // 比较左边比右边大的
    for(let i=len-2;i>=0;i--){
        if(ratings[i]>ratings[i+1]){
            // 这一步是为了保证不必要的多发糖果，最后一遍的校验
            // 如果目前糖果数已经大于相邻的，则不需要再加糖果数
            arr[i]=Math.max(arr[i],arr[i+1]+1)
        }
    }
    // reduce累加器
    return arr.reduce((a,b)=>a+b)
};
