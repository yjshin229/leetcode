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
    let headLength = 0
    let current = head
 
    while(current !== null){
        headLength += 1
        current = current.next
    }

    const target = headLength - n - 1
    if(n === headLength) return head.next
    current = head
    for(let i = 0; i < headLength; i++){
        if(i !== target){
            current = current.next
        }else{
            if(i === headLength - 1){
                current.next = null
            }else{
                current.next = current.next.next
            }
            break
        }
    }
    return head
};