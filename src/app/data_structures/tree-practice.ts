class BinaryNode<T> {
	public value: T;
	public left: BinaryNode<T> | null;
	public right: BinaryNode<T> | null;

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

		function _add(currentNode: BinaryNode<T>, newNode: BinaryNode<T>) {
			if (newNode.value < currentNode.value) {
				if (currentNode.left === null) {
					currentNode.left = newNode
				} else {
					_add(currentNode.left, newNode)
				}
			} else {
				if (currentNode.right === null) {
					currentNode.right = newNode;
				} else {
					_add(currentNode.right, newNode)
				}
			}
		}

		if (this.root === null) {
			this.root = newNode;
		} else {
			_add(this.root, newNode)
		}

	}

	remove(value: T){
		function _remove(node: BinaryNode<T>, value: T) {
			if (!node) {
				return null;
			}

			if (value === node.value) {
				if (!node.left && !node.right) {
					return null;
				}
				if (!node.left) {
					return node.right
				}
				if (!node.right) {
					return node.left;
				}
				let temp = this.findLowest(node.right);
				node.value = temp;
			}	
		}
	}

	findLowest(node: BinaryNode<T> | null){
		if (!node) {
			node = this.root
		} else {
					while (node.left) {

		}
		}

	}
}


