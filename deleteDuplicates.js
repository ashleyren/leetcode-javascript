/**
* Definition for singly-linked list.
* function ListNode(val) {
* this.val = val;
* this.next = null;
* }
*/

/**
* @param {ListNode} head
* @return {ListNode}
*/
var deleteDuplicates = function(head) {
    if (head === null){
    return null;
    } else if (head.next === null){
        return head;
    } else {
        var x = head;
        while(x.next !== null){
            if(x.val === x.next.val){
                x.next = x.next.next;
            } else {
                    x = x.next;
            }
        }
            return head;
    }
};
