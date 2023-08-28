/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //负数一定不是回文数
    //个位数是0的也不可能是回文数(0除外)
    if(x<0||(x%10===0&&x!==0)) return false;
    let s=String(x)
    rs='';
    for(let i=s.length-1;i>=0;i--){
        rs+=s[i];
    }
    return s===rs;
};