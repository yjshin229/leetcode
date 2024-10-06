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
var swapPairs = function(head) {
    if(head === null) return head

    let current = head
    let vals = []
    while(current !== null){
        vals.push(current.val)
        current = current.next
    }


    for (let i = 0; i < vals.length - 1; i += 2) {
        let temp = vals[i];
        vals[i] = vals[i + 1];
        vals[i + 1] = temp;
    }

    let idx = 0
    for(let current = head; current !== null; current = current.next){
        current.val = vals[idx]
        idx ++;
    }

    return head
};