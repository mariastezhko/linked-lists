// Print reverse linked list
function reversePrint(head) {

    if (head === null) {
        return;
    }

    reversePrint(head.next);
    console.log(head.data);

}


// Reverse linked list
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
