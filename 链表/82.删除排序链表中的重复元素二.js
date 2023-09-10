/**
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
var deleteDuplicates = function(head) {
  let dummy = {next: head};
    let fast = head, slow = dummy;
    while(fast){
        while(fast.next && fast.next.val == fast.val){
            fast = fast.next;
        }
        //只要slow.next != fast说明fast进行了内部循环 中间有重复值
        if(slow.next != fast){
            //直接切断中间所以重复的值
            slow.next = fast.next;
        }else{
            slow = slow.next;
        }
        fast = fast.next;
    }
    return dummy.next;
};