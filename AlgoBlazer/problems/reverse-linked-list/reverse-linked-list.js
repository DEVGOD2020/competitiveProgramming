function reverseList(head) {
    let prev = null;
    let next = head;
    while(head){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
