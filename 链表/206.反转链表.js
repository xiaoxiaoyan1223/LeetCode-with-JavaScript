**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 //迭代
var reverseList = function(head) {
   let pre=null;
   let cur=head;
   while(cur){
       const next=cur.next
       cur.next=pre;
       pre=cur;
       cur=next
   }
    return pre
};
//递归
// var reverseList=function(head){
//     if(head==null || head.next==null){
//         return head
//     }
//     const newHead=reserveList(head.next)
//     head.next.next=head;
//     head.next=null;
//     return newHead;
// }