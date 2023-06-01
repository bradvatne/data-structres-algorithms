class BinaryNode<T> {
	public value: T;
	public left: T | null;
	public right: T | null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree<T> {
	public root: BinaryNode<T> | null;

	constructor() {
		this.root = null;
	}

	add(value: T) {
		let newNode = new BinaryNode(value);



	}
	
}

//newTree.add(13)

/*

	1



check root node
if the root node is empty, we can assign the root node pointer to the new node.

let currentNode;



if it is not empty, we will check if the input node's value is less than the value of that root node

if it is less, then we will check if there is a node at the position on the left.

if there is not a node, we will set the roots left pointer to the node here

if there is a node, we will check if the input nodes value is less then the value






*/
