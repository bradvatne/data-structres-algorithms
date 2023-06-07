//provided solution
//great technique to sort first and then just add during iteration
//o(n)log(n) time -> o(log(n)) to sort, o(n) to iterate
//o(1) space for the result arr
const nonConstructibleChange = (arr: number[]) => {
  let coins = arr;
  coins.sort();
  let currentChangeCreated = 0;
  for (let coin in coins) {
    if (coins[coin] > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }
    currentChangeCreated += coins[coin];
  }
  return currentChangeCreated + 1;
};

//my attempt, didnt end up working. used a hash map but that clearly was not the move
const nonConstructibleChangeAttempt = (arr: number[]): number => {
  const change = new Map<number, number>();
  let lowest = 1;
  for (let x = 0; x < arr.length; x++) {
    change.has(arr[x])
      ? change.set(arr[x], change.get(arr[x])! + 1)
      : change.set(arr[x], 1);
    if (change.has(lowest)) lowest++;
  }
  return lowest;
};

const testArr = [5, 7, 1, 1, 2, 3, 2, 2];

console.log(nonConstructibleChange(testArr));
