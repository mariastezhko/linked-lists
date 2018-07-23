// Print reverse linked list
function reversePrint(head) {

    if (head === null) {
        return;
    }

    reversePrint(head.next);
    console.log(head.data);

}


// Reverse a linked list
function reverse(head) {

    var prev = head;
    var current = head.next;
    head.next = null

    while (current.next) {
        var temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    current.next = prev;
    return current;
}

// Reverse a doubly linked list
function reverseDLL(head) {
    var current = head;
    var el = head;
    
    while (current) {
        var temp = el.prev;
        el.prev = el.next;
        current = el.next;
        el.next = temp;
        if (current) {
            el = current;
        }
    }
    head = el;
    return head;
}
