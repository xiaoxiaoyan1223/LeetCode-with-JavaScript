/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //方法一
    // return  haystack.indexOf(needle)
    // 方法二
    const n=haystack.length,m=needle.length
    for(let i=0;i<n;i++){
        let flag=true;
        for(let j=0;j<m;j++){
            if(haystack[i+j]!==needle[j]){
                flag=false
                break
            }
        }
        if(flag){
            return i
        }
    }
    return -1
};