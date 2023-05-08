/*

2. Linked Lists: Implement a singly linked list that stores integers. Your implementation should support the following methods:
    - **`insert(value, position)`**: Insert a new node with the specified value at the given position in the list.
    - **`delete(position)`**: Delete the node at the given position from the list.
    - **`search(value)`**: Search for a node with the specified value and return its position.
    - **`length()`**: Return the number of nodes in the list.

*/

class MyLinkedListNode {
  value: number;
  next: MyLinkedListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

type POS = "head" | "tail";

class MyLinkedList {
  head: MyLinkedListNode | null;
  tail: MyLinkedListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val: number, pos: POS) {
    const newNode = new MyLinkedListNode(val);
    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    if (pos === "head") {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    }
    if (pos === "tail") {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
      }
      return;
    }
  }
  //traverse to the one before tail element
  //set its pointer to null
  //decrement

  //set the next one of the head to the head
  //decrement
  delete(pos: POS) {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    if (pos === "head" && this.head) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    if (pos === "tail") {
      let currentNode = this.head;
      if (currentNode !== null) {
        for (let x = 0; x < this.length - 2; x++) {
          currentNode = currentNode.next!;
        }
        this.tail = currentNode;
        currentNode.next = null;
        this.length--;
      }
      return;
    }
  }

  search(val: number) {
    let currentNode = this.head;
    for (let x = 0; x < this.length; x++) {
      if (currentNode?.value === val) {
        return x;
      }
      currentNode = currentNode?.next!;
    }
    return null;
  }
}

const list = new MyLinkedList();
/* 
list.insert(1, "head");
list.insert(2, "tail");
list.insert(3, "tail");

Helper function to print list
function printList(list: MyLinkedList) {
  let currentNode = list.head;
  let output = "List: ";
  while (currentNode !== null) {
    output += currentNode.value;
    if (currentNode.next !== null) {
      output += " -> ";
    }
    currentNode = currentNode.next;
  }
  console.log(output);
}
*/
// Insert values
list.insert(1, "head");
list.insert(2, "tail");
list.insert(3, "tail");

console.log("Search for value 1:", list.search(1)); // Output: 0
console.log("Search for value 2:", list.search(2)); // Output: 1
console.log("Search for value 3:", list.search(3)); // Output: 2
console.log("Search for value 4:", list.search(4)); // Output: null
