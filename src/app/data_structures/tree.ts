class TreeNode<T> {
	public value: T;
	public left: TreeNode<T> | null;
	public right: TreeNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BasicUnbalancedTree<T> {
	root: TreeNode<T> | null;

	constructor(value: T) {
		this.root = null;
	}

	isEmpty(): boolean {
		return this.root === null;
	}

	insert(value: T): void {
		const node = new TreeNode<T>(value);

		if (this.isEmpty()) {
			this.root = node;
		} else {
			let currentNode: TreeNode<T> | null = this.root;

			while (currentNode) {
				if (value > currentNode.value) {
					if (currentNode.right === null) {
						currentNode.right = node;
						return;
					}
					currentNode = currentNode.right;
				} else {
					if (currentNode.left === null) {
						currentNode.left = node;
						return;
					}
				}
			}
		}
	}
}
