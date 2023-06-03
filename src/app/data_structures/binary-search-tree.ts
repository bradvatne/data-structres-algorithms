class BSTNode<T> {
  value: T;
  left: BSTNode<T> | null = null;
  right: BSTNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BST<T> {
  root: BSTNode<T> | null;

  constructor(root: BSTNode<T>) {
    this.root = root;
  }

  isEmpty() {
    return this.root === null;
  }

  printTraversal() {
    const printRecurse = (currentNode: BSTNode<T>) => {
      console.log(currentNode.value);
      currentNode.left && printRecurse(currentNode.left);
      currentNode.right && printRecurse(currentNode.right);
    };
    this.root === null ? console.log("empty") : printRecurse(this.root);
  }

  search(value: T) {
    const _search = (currentNode: BSTNode<T>, value: T) => {
      if (!currentNode.value) return false;
      if (value === currentNode.value) return true;
      if (value < currentNode.value) {
        currentNode.left ? _search(currentNode.left, value) : false;
      } else currentNode.right ? _search(currentNode.right, value) : false;
    };
    if (this.root === null) return false;
    _search(this.root, value);
  }

  insert(value: T) {
    const newNode = new BSTNode<T>(value);

    const _insert = (currentNode: BSTNode<T>, newNode: BSTNode<T>) => {
      if (newNode.value < currentNode.value) {
        currentNode.left === null
          ? (currentNode.left = newNode)
          : _insert(currentNode.left, newNode);
      } else {
        currentNode.right === null
          ? (currentNode.right = newNode)
          : _insert(currentNode.right, newNode);
      }
    };

    this.root === null ? (this.root = newNode) : _insert(this.root, newNode);
  }

  remove(value: T) {
    const _findMaxNode = (node: BSTNode<T> | null) => {
      while (node != null && node.right != null) {
        node = node.right;
      }
      return node;
    };

    const _remove = (
      node: BSTNode<T> | null,
      value: T
    ): BSTNode<T> | null => {
      if (node === null) return null;
      if (value < node.value) {
        node.left = _remove(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = _remove(node.right, value);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null;
        } else {
          if (node.left == null) {
            return node.right;
          } else if (node.right == null) {
            return node.left;
          }
          if (node.left == null) {
            return node.right;
          } else if (node.right == null) {
            return node.left;
          }
          const inorderPredecessor = _findMaxNode(node.left)!;
          node.value = inorderPredecessor.value;
          node.left = _remove(node.left, inorderPredecessor?.value);
          return node;
        }
      }
    };
    return null;
  }
}

