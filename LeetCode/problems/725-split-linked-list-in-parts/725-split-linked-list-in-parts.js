/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let current = head;
    count = 0;
    while(current){
        count++;
        current = current.next;
    }

    let part_size = Math.floor(count/k);
    let extra_nodes = count%k;

    current = head;
    let result = [];
    for(let I = 0; I<k; I++){
        part_head = current;

        let bruh = part_size-1 + +(I<extra_nodes);
        for(let J=0; J< bruh; J++){
            if(current){
                current = current.next;
            }
        }

        if(current){
            let next_node = current.next;
            current.next = null;
            current = next_node;
        }

        result.push(part_head);
    }

    return result;
};