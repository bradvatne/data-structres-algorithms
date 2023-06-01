class BinaryNode<T> {
	value: T;
	left: TreeNode<T> | null;
	right: TreeNode<T> | null;

	constructor(val: T) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree<T> {
	root: TreeNode<T> | null;

	constructor(node: BinaryNode<T> | null) {
		this.root = node;
	}

	insert(val: T, inputNode: BinaryNode<T> | null) {
		if (this.root === null) this.root = inputNode;
	}	if ()
}

//insert(34)