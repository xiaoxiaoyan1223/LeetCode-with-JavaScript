/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function(head, left, right) {
    const dummy_node = new ListNode(-1,head);
    let pre = dummy_node;
    for (let i = 0; i < left - 1; ++i) {
        //pre前进到left的前一个节点
        pre = pre.next;
    }

    let cur = pre.next;
    for (let i = 0; i < right - left; ++i) {
        //循环right - left次 反转中间的节点
        const next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy_node.next;//返回虚拟头节点的next
}
