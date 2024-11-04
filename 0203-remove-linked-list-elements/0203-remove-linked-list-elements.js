/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head;
    
    let ret = new ListNode(0)
    let temp = ret

    for(let current = head; current; current = current.next){
        if(current.val !== val){
            temp.next = new ListNode(current.val)
            temp = temp.next
        }
    }

    return ret.next
};