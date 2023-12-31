/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // if(strs.length===0) return []
    // // console.log(...strs)
    // const arr=[]
    // for(let i=0;i<strs.length;i++){
    //     arr[i]=[...strs[i]].sort().join("")
    // }
    // console.log(arr)
    const map=new Map()
    for(let str of strs){
        // 将字符转换成数组[ 'e', 'a', 't' ],['t','e','a'],...
        let array=Array.from(str)
        array.sort()
        // console.log(strs)
        let key=array.toString() 
        let list=map.get(key)?map.get(key):new Array()
        list.push(str)
        map.set(key,list)
    }
    //将map中的value转成数组
    return Array.from(map.values())
};
//方法二：Map
var groupAnagrams = function(strs) {
    var h=new Map,k
    for(var i=0;i<strs.length;i++){
        //对当前字符串进行排序并转换为字符串作为 key
        h.has(k=strs[i].split('').sort().join(''))?h.get(k).push(strs[i]):h.set(k,[strs[i]])
    }
    return Array.from(h.values())
};
