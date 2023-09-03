/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr=s.trim().split(' ')
    //  return arr.sort().join(' ')
    let len=arr.length
    console.log(arr)
    const res=[]
    let j=0
    for(let i=len;i>=0;i--){
        if(arr[i]!=''){
            res[j]=arr[i]
            j++;
        }
        // console.log(res[i])
    }
    return res.join(' ').trim()
};