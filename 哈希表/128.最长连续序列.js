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

//方法二
var longestConsecutive = function(nums) {
        let map={}
        maxCount=0
        //将数组去重
        nums=new Set(nums)
        for(let value of nums){
            //从最小的开始查找
            if(nums.has(value-1)) continue;
            let curr=value
            //开始逐步生长
            while (nums.has(curr+1)){
                nums.delete(curr+1);
                curr++
            }
            maxCount=Math.max(maxCount,curr-value+1)
        }
        return maxCount
};
