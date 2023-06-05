const twoSumFn = (nums: number[], target: number): number[] => {
  const items = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (items.get(compliment)) {
      return [compliment, nums[i]];
    }
    items.set(i, nums[i]);
  }
  return [];
};

let testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let test = 10;

console.log(twoSumFn(testArr, test));
