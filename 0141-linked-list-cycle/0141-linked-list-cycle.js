/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let listMap = {}
    let BIG_NUMBER = Math.pow(10,5) + 1

    // for(let current = head; !current; current = current.next){
    //     if(!current.val === BIG_NUMBER) {
    //         current.val = BIG_NUMBER 
    //     }else{
    //         return true
    //     }
    // }
    let current = head
    while(current){
        if(current.val !== BIG_NUMBER) {
            current.val = BIG_NUMBER 
        }else{
            return true
        }
        current = current.next
    }
    return false
};