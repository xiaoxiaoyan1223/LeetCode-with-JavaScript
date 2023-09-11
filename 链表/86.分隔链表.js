/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var smaller=dummySmall=new ListNode(-1)
    dummySmall.next=null
    var greater=dummyGreat=new ListNode(-1)
    dummyGreat.next=null
    while(head){
        if(head.val<x){
            smaller.next=head
            smaller=smaller.next
        }
        else{
            greater.next=head
            greater=greater.next
        }
        head=head.next
    }
    
    smaller.next=dummyGreat.next
    greater.next=null
    return dummySmall.next
        
}
