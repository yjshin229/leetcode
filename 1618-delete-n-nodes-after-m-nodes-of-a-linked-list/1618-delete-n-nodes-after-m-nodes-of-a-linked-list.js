/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function(head, m, n) {
    let mCount = 0
    let nCount = 0
    let del = false

    let start = null

    for(let current = head; current; current = current.next){
        if(!del){
            mCount ++;
            if(mCount === m){
                del = !del
                mCount = 0
                start = current
            }
        }else{
            nCount ++;
            if(nCount === n){
                start.next = current.next
                del = !del
                nCount = 0
            }
            if(nCount && current.next === null){
                start.next = null
            }
        }
    }
    return head
};