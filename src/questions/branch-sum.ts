//o(n) time
//o(m) space, where m is the number of leaf nodes, additionally the recursion stack could take o(h) where h is height, so it is fair to assume o(n) space in worst case
//the key part i learned here is the technique of checking for a left or right node and pushing the value if it cant be found.
// my unaltered implementation didn't do that and thus failed.
const branchSum = (node: TBSTNode<number>): number[] => {
    const branches: number[] = [];
    const _recurse = (node: TBSTNode<number>, runningTotal: number) => {
      if (!node) return;
  
      const newRunningTotal = runningTotal + node.value;
  
      if (!node.left && !node.right) {
        branches.push(newRunningTotal);
        return;
      }
  
      _recurse(node.left!, newRunningTotal);
      _recurse(node.right!, newRunningTotal);
    };
    _recurse(node, 0);
    return branches;
  };
  
  console.log(branchSum(testTree.root!));
  