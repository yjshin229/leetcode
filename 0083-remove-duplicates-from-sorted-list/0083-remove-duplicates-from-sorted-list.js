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

    for(let current = head; current; current = current.next){
        seen.add(current.val)
    }

    seen = Array.from(seen)
    // seen.sort((a,b) => a - b)
    let retList = new ListNode(0)

    let current = retList

    for(const num of seen){
        current.next = new ListNode(num)
        current = current.next
    }

    return retList.next


};