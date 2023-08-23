/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //先把链表的值放到数组里面
    const arr=[]
    while(head!==null){
        arr.push(head.val)
        head=head.next;
    }
    //设置双指针
    for(let i=0,j=arr.length-1;i++,j--;i<j){
        if(arr[i]!==arr[j]){
            return false
        }
    }
    return true
};