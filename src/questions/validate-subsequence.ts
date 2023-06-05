// 2n = o(n)
//1
const validateSubsequence = (arr: number[], seq: number[]): boolean => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === seq[j]) {
      j++;
    }
  }
  return j === seq.length;
};

let test1 = [5, 1, 22, 25, 6, -1, 8, 10];
let test2 = [1, 6, -1, 10];

console.log(validateSubsequence(test1, test2));
