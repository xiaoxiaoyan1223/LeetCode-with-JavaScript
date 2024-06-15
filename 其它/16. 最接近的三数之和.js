/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) { 
    // 排序使用双指针
    const n=nums.length
    // 对数组进行排序 
    nums.sort((a,b)=>a-b)
    // 维护最接近的数
    let min=Number.MAX_SAFE_INTEGER
    for(let i=0;i<n-2;i++){
        let x=nums[i]
        // 跳过相同的数，优化代码
        if(i>0&&x===nums[i-1])  continue
        // 内层循环
        let s=x+nums[i+1]+nums[i+2]
        // 后面不会有比这三个和更小的啦
        if(s>target) {
            if(s-target<min){
                ans=s
            }
            break
        }

        s=x+nums[n-2]+nums[n-1]
        // x还会变大
        if(s<target){
            // 判断右边
            if(target-s<min){
                min=target-s
                ans=s
            }
            continue
        }
        
        // 利用双指针
        let left=i+1,right=n-1
        while(left<right){
            s=x+nums[left]+nums[right]
            if(s===target){
                return target
            }
            if(s>target){
                if(s-target<min){
                    min=s-target
                    ans=s
                }
                right--
            }else{
                if(target-s<min){
                    min=target-s
                    ans=s
                }
                left++
            }
        }
    }
    return ans
};
