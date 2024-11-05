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
var reverseList = function(head) {
    if(!head) return head

    const stack = []

    for (let current = head; current; current = current.next){
        stack.push(current.val)
    }

    let ret = new ListNode(0)
    let temp = ret
    for(let i = stack.length -1; i >= 0; i --){
        temp.next = new ListNode(stack[i])
        temp = temp.next
    }

    return ret.next
};