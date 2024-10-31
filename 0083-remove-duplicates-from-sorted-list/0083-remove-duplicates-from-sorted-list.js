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
    let seen = new Set()
    let retList = new ListNode(0)
    let retCurr = retList

    for(let current = head; current; current = current.next){
        if(!seen.has(current.val)){
            seen.add(current.val)
            retCurr.next = new ListNode(current.val)
            retCurr = retCurr.next
        }
    }

    return retList.next


};