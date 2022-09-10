class SLLNode { // Singly-linked list node class
    constructor(val) {
        this.value = val; // Holds value for this node
        this.next = null; // Pointer to next node
    }
}

class SLL { // The singly-linked list class itself
    constructor() { // Will start with no nodes
        this.head = null; // Head points to first node
    }

    // All methods built into your class go here
    // Adds a node to the front
    addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head; // OR you can say return this;
    }

    // Remove a node from the front of the list
    removeFront() {
        if (this.head == null) { // Edge case: If the list is empty, nothing to remove
            return this.head;
        }
        var removeNode = this.head; // Have a variable hold the node we'll remove
        this.head = removeNode.next; // Moves the head of the list to the 2nd node, which will become the new head when we're done
        removeNode.next = null;
        return this.head;
    }

    // Return the value at the front (head) of the list
    front() {
        // Edge case: List is empty
        if (this.head == null) {
            return null;
        } else { // List is not empty
            return this.head.value;
        }
        // Ternary operator: Condition ? value_if_true : value_if_false
        // return this.head ? this.head.value : null;
        // return this.head == null ? null : this.head.value;
    }
}

var mySLL = new SLL(); // Starts us off with an empty list
console.log(mySLL.front());
mySLL.addFront(10);
console.log(mySLL.front());
mySLL.addFront(5);
mySLL.addFront(3);
// console.log(mySLL);
// mySLL.removeFront();

// console.log(mySLL);
// console.log(mySLL.head.next); // Prints the second node