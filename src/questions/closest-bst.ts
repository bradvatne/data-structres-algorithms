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

    const _remove = (node: BSTNode<T> | null, value: T): BSTNode<T> | null => {
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

type TBSTNode<T> = {
  value: T;
  left: BSTNode<T> | null;
  right: BSTNode<T> | null;
};
type TBST<T> = {
  root: BSTNode<T>;
  isEmpty: () => boolean;
  search: (val: T) => boolean;
  insert: (val: T) => void;
  remove: (val: T) => TBSTNode<T>;
};

/*
Write a function findClosestValue that takes a reference to the root of the BST and a target value as input. 
The function should return the value in the BST that is closest to the target value.
*/

const testTree = new BST(new BSTNode(8));
testTree.insert(8);
testTree.insert(3);
testTree.insert(1);
testTree.insert(6);
testTree.insert(4);
testTree.insert(7);
testTree.insert(10);
testTree.insert(14);
testTree.insert(13);

//my brute force solution
//o(n) to traverse the entire tree (not efficient)
//o(n) to itereate over the nodes
//2n = o(n) but still not very efficient, could be o n(log(n)) i think
//space is o(1) i think, because that is all that is being returned. i dont think i include the map or array in the space but i could be wrong
const closestValueBST = (node: TBSTNode<number>, target: number) => {
  const valueMap = new Map<number, number>();
  const _traverse = (node: TBSTNode<number>) => {
    valueMap.set(node.value, Math.abs(node.value - target));
    if (node.left) _traverse(node.left);
    if (node.right) _traverse(node.right);
  };
  _traverse(node);
  let lowest = Math.abs(node.value - target);
  for (const kvpair of valueMap.entries()) {
    let [k, v] = kvpair;
    if (v < lowest) lowest = k;
  }
  return lowest;
};

//This is my implementation of the solution
//The function performs a modified DFS traversal, updating the closest and minDiff values as it explores the tree.
//This optimized implementation has a time complexity of O(log N) in the average case and O(N) in the worst case (when the tree is skewed), where N is the number of nodes in the BST.
//The space complexity remains O(1) since we don't use any additional data structures to store intermediate results.
const closestValueBST2 = (node: TBSTNode<number>, target: number) => {
  let currentLowest = Math.abs(target - node.value);
  let closest = node.value;
  const _traverse = (node: TBSTNode<number>) => {
    if (node === null) return;

    const diff = Math.abs(node.value - target);

    if (diff < currentLowest) {
      closest = node.value;
      currentLowest = diff;
    }
    if (target < node.value) {
      _traverse(node.left!);
    } else if (target > node.value) {
      _traverse(node.right!);
    }
  };
  _traverse(node);
  return closest;
};

console.log(closestValueBST2(testTree.root!, 17));
