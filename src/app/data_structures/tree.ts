class TreeNode<T> {
	value: T;
	left: TreeNode<T> | null;
	right: TreeNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BasicUnbalancedTree<T> {
	root: TreeNode<T> | null;

	constructor() {
		this.root = null;
	}

	insert(node: TreeNode<T> | null, value: T) {
		if (node === null) {
			return new TreeNode(value);
		} else if (value < node.value) {
			node.left = this.insert(node.left, value);
		} else if (value > node.value) {
			node.right = this.insert(node.right, value);
		}

		return node;
	}

	find(node: TreeNode<T> | null, value: T): boolean {
		if (node === null) {
			return false;
		} else if (node.value === value) {
			return true;
		} else if (value < node.value) {
			this.find(node.left, value);
		} else if (value > node.value) {
			this.find(node.right, value);
		}

		return false;
	}

	delete(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
		if (node === null) {
			return null;
		} else if (node.value === value) {
			
		}
		return node;
	}
}
