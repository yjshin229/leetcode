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
var middleNode = function(head) {
    const getLength = () => {
        let count = 0 
        for(let current = head; current; current = current.next){
            count ++;
        }
        return count
    }

    const length = getLength()
    const mid = length % 2 === 0? length / 2 : Math.floor(length / 2)

    let count = 0
    for(let current = head; current; current = current.next){
        if(count === mid){
            return current
        }else{
            count ++;
        }
    }
};