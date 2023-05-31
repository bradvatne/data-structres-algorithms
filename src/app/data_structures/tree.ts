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

	insert(value: T, node?: TreeNode<T>) {
		if (!node) {
			if (!this.root) {
				this.root = new TreeNode(value)
			}
		}
		if (!this.root) {
			if (!node) {
				this.root.left > 
			}
		}
	}
}
