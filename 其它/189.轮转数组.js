/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 //方法一：用开辟额外空间
// var rotate = function(nums, k) {
//     let n=nums.length
//     let arr=Array(n).fill(0)
//     for(let i=0;i<n;i++){
//         //正好可以使要轮回的元素放到前面
//        arr[(i+k)%n]=nums[i]
//     }
//    for(let j=0;j<n;j++){
//        nums[j]=arr[j]
//    }
// };
//方法二：不用开辟额外空间 翻转数组
const reverse=(nums,start,end)=>{
    while(start<end){
        const temp=nums[start]
        nums[start]=nums[end]
        nums[end]=temp
        start+=1
        end-=1
    }
}
var rotate=function(nums,k){
    //排除轮转超过一圈的情况
    k%=nums.length;
    reverse(nums,0,nums.length-1)
    reverse(nums,0,k-1)
    reverse(nums,k,nums.length-1)
}

