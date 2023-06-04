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

const fn = (arr: number[], goal: number) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === goal) {
        console.log(`success! ${arr[i]} + ${arr[j]} = ${goal}`);
      }
    }
  }
};

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

fn(testArr, 8);
