/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack=[];
    for(let i=0;i<s.length;i++){
        var start=s[i];
        if(s[i]=="(" || s[i]=="{" || s[i]=="["){
            stack.push(s[i])
        }else{
            var end=stack[stack.length-1];
            if(start==")" && end=="(" ||
            start=="}"&&end=="{" ||
            start=="]" &&end=="["){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length==0
};