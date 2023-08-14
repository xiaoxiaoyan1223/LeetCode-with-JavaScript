/**
 * @param {number[]} nums
 * @return {boolean}
 */
//该方法行不通，因为为考虑到负数
// var containsDuplicate = function(nums) {
//     //声明一个全为0的数组
//     let arr = new Array(1000000).fill(0);
//     for(let i=0;i<nums.length;i++){
//         arr[nums[i]]++;
//         // console.log(arr[nums[i]]);
//         if(arr[nums[i]]>1){
//             return true;
//         }
//     }
//     return false;
// };
var containsDuplicate = function(nums) {
    const set=new Set();
    for(const x of nums){
        if(set.has(x)){
            return true;
        }
        set.add(x)
    }
    return false;
}