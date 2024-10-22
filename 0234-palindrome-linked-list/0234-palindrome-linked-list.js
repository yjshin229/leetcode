/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let data = []

    for(let current = head; current; current = current.next){
        data.push(current.val)
    }

    let left = 0
    let right = data.length -1

    while(left <= right){
        if(data[left] !== data[right]){
            return false
        }
        left ++;
        right --;
    }
    return true
};