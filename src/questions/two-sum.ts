/*
https://algodaily.com/challenges/two-sum
Good morning! Here's our prompt for today.

Given an array of integers, return the indices of the two numbers in it that add up to a specific "goal" number.

Suppose we had an array [1, 3, 6, 7, 9], and let's say our "goal" number was 10. Our numbers to sum to it could be 3 and 7, and we would return an array of indices 1 and 3 respectively.

javascript
python
let arr = [1, 3, 6, 7, 9];
let goal = 10;
twoSum(arr, goal);
// [1, 3]
You may assume that each input would have exactly one solution. Additionally, you may not use the same element twice towards the sum. This means if given [1, 3] and a goal of 2, you cannot use 1 twice and return its index twice as [0, 0].

Note that you cannot guarantee the array is sorted.

*/

//my two sum - o(n^2) time - (nested for loops)
const myTwoSum = (arr: number[], goal: number) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === goal) {
        //console.log(`success! ${arr[i]} + ${arr[j]} = ${goal}`);
        return [arr[i], arr[j]];
      }
    }
  }
};

//better solution - hash table - o(n)

const twoSum = (nums: number[], target: number): number[] => {
  let hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashTable.has(complement)) {
      return [complement, nums[i]];
    }
    hashTable.set(nums[i], i);
  }
  return [];
};
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
