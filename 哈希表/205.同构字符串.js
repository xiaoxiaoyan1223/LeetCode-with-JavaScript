/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const s2t = {}, t2s = {}
    for(let i = 0; i<s.length; i++) {
       let x = s[i], y = t[i]
        // 双射
        if((s2t[x] && s2t[x] !== y) ||(t2s[y] && t2s[y] !==x)) return false 
        s2t[x] = y
        t2s[y] = x
    }
    return true
};

// 方法二
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const len1=s.length
    const len2=t.length
    if(len1!==len2) return false
    const map1=new Map()
    const map2=new Map()
    for(let i=0;i<len1;i++){
        if(map1.has(s[i])){
            if(map1.get(s[i])!==t[i]) return false
        }else{
            map1.set(s[i],t[i])
        }
        // 只建立单向映射不能满足类似 s="badc" t="baba"
        // 所以我们要建立双向映射
        if(map2.has(t[i])){
            if(map2.get(t[i])!==s[i]) return false
        }else{
            map2.set(t[i],s[i])
        }
    }
    return true
};
