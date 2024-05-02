/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //方法一
    // return s.length == t.length && [...s].sort().join('') == [...t].sort().join('')
    //方法二
    let len1=s.length
    let len2=t.length
    if(len1!==len2) return false
    const map=new Map()
    for(i of s){
       map.get(i)?map.set(i,map.get(i)+1):map.set(i,1)
    }
    for(i of t){
        if(!map.get(i)){
            return false
        }else{
            map.set(i,map.get(i)-1)
            if(map.get(i)<0) {
                return false
            }
        }
    }
    return true
};
// 方法三
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    return s.split('').sort().join("")===t.split('').sort().join("")
    
};
