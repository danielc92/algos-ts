const binarySearch = (sortedList: number[], item: number): number | null => {
  console.log('[start]');

  let low = 0;
  let high = sortedList.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = sortedList[mid];
    console.log(low, mid, high);
    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

console.log(binarySearch([1], 1));
console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([1, 3, 4, 5, 25], 25));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch(new Array(240000).fill(null).map((_item, index) => index), 165000));
