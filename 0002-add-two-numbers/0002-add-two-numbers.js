/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Stack = []
    let l2Stack = []

    for(let currentNode = l1; currentNode; currentNode = currentNode.next){        
        l1Stack.unshift(currentNode.val)
    }
    for(let currentNode = l2; currentNode; currentNode = currentNode.next){
        l2Stack.unshift(currentNode.val)
    }
    const sum = (parseInt(l1Stack.join("")) + parseInt(l2Stack.join(""))).toString().split("")

    let carry = 0;
    let res = []
    while (l1Stack.length || l2Stack.length || carry !== 0) {
        let sum = carry;
        
        if (l1Stack.length) {
            sum += l1Stack.pop(); 
        }
        if (l2Stack.length) {
            sum += l2Stack.pop(); 
        }

        carry = Math.floor(sum / 10); 
        res.unshift(sum % 10);  
    }

    let resNode = new ListNode(0);  // Dummy node
    let currentNode = resNode;

    while (res.length) {
        currentNode.next = new ListNode(res.pop());  
        currentNode = currentNode.next;
    }
    return resNode.next
};