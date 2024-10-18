/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let listSet = new Set()
    //traverse A first
    for(let current = headA; current; current = current.next){
        // current.val = -current.val
        listSet.add(current)
    }

    let res;
    for(let current = headB; current; current = current.next){
       if(listSet.has(current)){
        return current
       }
    }
    return null
};