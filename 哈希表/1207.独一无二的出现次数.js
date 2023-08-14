/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map=new Map()
    for(const x of arr){
        // if(map.has(x)){
        //     map.set(x,map.get(x)+1)
        // }else{
        //     map.set(x,1)
        // }
        //简洁写法
        map.set(x,(map.get(x)||0)+1)
    }
    const set=new Set()
    for(const [key,val] of map){
        set.add(val)
    }
    return set.size===map.size
};