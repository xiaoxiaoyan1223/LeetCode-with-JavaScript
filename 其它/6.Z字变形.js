/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 若字符串只有一个字母则直接返回
    if(numRows===1||s.length<=numRows) return s
    const len=Math.min(s.length,numRows)
    // 创建空数组记录行数
    const arr=new Array(numRows).fill('')
    // 当前字母对应的行
    let num=0
    // true表示向下+  false表示向上-
    let plus=true
    for(let i=0;i<s.length;i++){
        // 每次向当前行里添加字符串
        arr[num]+=s[i]
        if(plus){
            num+=1
        }else{
            num-=1
        }
        if(num===0)  plus=true
        if(num==numRows-1) plus=false
    }
    return arr.join('')
};
