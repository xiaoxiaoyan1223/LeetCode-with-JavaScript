/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack=[]
    for(item of s){
        let pre=stack.pop()
        if(pre!=item){
            stack.push(pre);
            stack.push(item);
        }
    }
    return stack.join('')
};