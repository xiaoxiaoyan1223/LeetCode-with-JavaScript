/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    //排除一些特殊情况
    if(!head||!head.next||!k) return head
    let cur=head
    let flag=1
    //让cur指向最后一个节点
    while(cur&&cur.next){
        cur=cur.next
        flag++
    }
    // console.log(flag)
    //需要挪动的次数
     k=flag-k%flag;
    //构成一个环形链表
    cur.next=head
    // cur=cur.next
    //让cur指向新的头结点
    while(k){
        cur=cur.next
        k--
    }
    let now=cur.next
    cur.next=null
    return now
};