/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   const arr=s.trim().split(' ')
   let len=arr.length
   return arr[len-1].length
};