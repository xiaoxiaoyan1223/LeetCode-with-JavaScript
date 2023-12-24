/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 使用 Map 数据结构来存储字符和其对应的索引
    const map=new Map()
    // 左指针，表示当前无重复字符子串的起始位置
    let l=0;
    let num=0
    for(let i=0;i<s.length;i++){
        // 如果当前字符已经在子串中出现过，并且其索引大于等于左指针 l，
        // 则更新左指针 l，使其指向重复字符的下一个位置
        if(map.has(s[i])&&map.get(s[i])>=l){
            l=map.get(s[i])+1
        }
        num=Math.max(num,i-l+1)
        map.set(s[i],i)
    }
    return num;
};
