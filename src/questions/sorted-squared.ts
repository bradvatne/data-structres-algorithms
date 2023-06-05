//o(n)log(n) time complexity as we are using a sort function
const sortedSquared = (arr: number[]): number[] => {
  return arr.map((item) => item * item);
};

const sortedSquaredTest = [-7, -5, -4, 3, 6, 8, 9];

let ans = sortedSquared(sortedSquaredTest).sort((a, b) =>
  a < b ? (a > b ? 1 : -1) : 0
);

//console.log(ans);

//o(n) time - loops over the function 1 time
//o(n) space - returns an array of the same size
const sortedSquaredFast = (arr: number[]): number[] => {
  let newArr = new Array<number>(arr.length);
  let i = 0;
  let j = arr.length - 1;
  let count = arr.length - 1;
  while (i <= j) {
    if (Math.abs(arr[i]) < Math.abs(arr[j])) {
      newArr[count] = arr[j] * arr[j];
      j--;
    } else {
      newArr[count] = arr[i] * arr[i];
      i++;
    }
    count--;
  }
  return newArr;
};

console.log(sortedSquaredFast(sortedSquaredTest));
