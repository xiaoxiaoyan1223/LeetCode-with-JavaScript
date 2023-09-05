/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length==0) return 0
    const arr=[...new Set(nums.sort((a,b)=>a-b))]
    console.log(arr)
    let flag=1
    const len=[]
    if(nums.length===0) return 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]+1===arr[i+1]){
            flag++
            console.log(flag)
        }else{
            len.push(flag)
            flag=1;
        }
    }
    return Math.max.apply(0,len)
};