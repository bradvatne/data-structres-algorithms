class TreeNode<T> {
  value: T;
  children: TreeNode<T>[];
  parent: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.children = []; 
    this.parent = null;
  }

  setParent(parent: TreeNode<T>) {
    this.parent = parent;
  }

  getParent() {
    return this.parent;
  }

  addNode(node: TreeNode<T>) {
    node.setParent(this);
    this.children.push(node);
  }

  getChildren() {
    return this.children;
  }

  removeAllChildren() {
    this.children = [];
  }
}

class Tree<T> {
  constructor(public root: TreeNode<T>) {
    this.root = root;
  }
}
