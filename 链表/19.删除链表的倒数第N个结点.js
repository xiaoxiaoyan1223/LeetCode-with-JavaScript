/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //创建一个新的 'ListNode' 节点 'dummyHead'，它的值为 0，它的 'next' 属性指向原链表的头节点 'head',这个新节点 'dmy' 作为原链表的头节点前面的一个虚拟头节点，用来简化边界情况的处理
    let dummyHead=new ListNode(0,head)
    let slow=dummyHead
    let fast=dummyHead
    while(n>0){
        fast=fast.next
        n--
    }
    while(fast!==null&&fast.next!==null){
        fast=fast.next
        slow=slow.next
    }
    slow.next=slow.next.next
    return dummyHead.next
};