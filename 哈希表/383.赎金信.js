/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let res=new Map;
    magazine.split('').forEach((item)=>{
        res.has(item)?res.set(item,res.get(item)+1):res.set(item,1)
    })
    for(let i of ransomNote){
        if(res.has(i)&&res.get(i)>0){
            res.set(i,res.get(i)-1)
        }else{
            return false
        }
    }
    return true
};