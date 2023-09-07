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