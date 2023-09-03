/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0){
        return ""
    }
    let tar=strs[0]
    for(let i=0;i<strs.length;i++){
        let j=0
        for(;j<tar.length&&j<strs[i].length;j++){
            if(tar[j]!=strs[i][j])
            break
        }
        tar=tar.substr(0,j)
        if(tar==="") return ""
    }
    return tar
};