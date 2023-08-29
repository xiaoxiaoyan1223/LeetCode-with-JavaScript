**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len=nums.length;
    if(len==0 || nums==null) return 0;
    let p=0
    let q=1
    while(q<len){
        if(nums[p]!==nums[q]){
            nums[p+1]=nums[q]
            p++;
        }
        q++
    }
    return p+1
};