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
var reverseKGroup = function(head, k) {
    if(!head) return head
    if(k<2) return head
    let dummy = new ListNode(0);  
    dummy.next = head;  
    let prev = dummy; 
    // 计算链表长度  
  let length = 0;  
  let node = head;  
  while (node) {  
    length++;  
    node = node.next;  
  } 
  node = head;  
  for (let i = 0; i < Math.floor(length / k); i++) {  
    for (let j = 1; j < k; j++) {  
      // 记录下一个要翻转的节点  
      let next = node.next;  
      // 进行翻转操作  
      node.next = next.next;  
      next.next = prev.next;  
      prev.next = next;  
     }  
     // 移动 prev 和 node 节点  
      prev = node;  
      node = node.next;  
    }  
  return dummy.next;  
};