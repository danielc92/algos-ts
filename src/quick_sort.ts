// Quick sort example

const quickSort = (unsorted: number[]): number[] => {
  if (unsorted.length < 2) {
    return unsorted;
  }
  // select a pivot
  const pivot = unsorted[0];

  // divide and conquer
  const rest = unsorted.slice(1, unsorted.length);
  const lessThan = rest.filter((x) => x < pivot);
  const greaterThan = rest.filter((x) => x > pivot);

  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];
};

const result = quickSort([1, 5, 12, 311, 55, 44, 13, 222, 333]);
console.log(result);

// Note: this does not work with duplicates!
const result2 = quickSort([1, 5, 5, 5, 12, 311, 55, 44, 13, 222, 333]);
console.log(result2);

console.log(quickSort([1]));

console.log(quickSort([]));

console.log(quickSort([]));
