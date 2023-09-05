/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // const arr=new Map()
    const arr=[]
    let sum=0
    while(sum!=1){
        sum=0
        while(n!=0){
            sum+=(n%10)*(n%10)
            n=parseInt(n/10)
        }
        // console.log(sum)
    if(!arr.includes(sum)){
        arr.push(sum)
        console.log(sum)
        n=sum
    }
    else{
        return false
      }
    }
    return true
};