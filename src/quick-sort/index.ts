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

// Note: this does not work with duplicates!
console.log(quickSort([1, 5, 5, 5, 12, 311, 55, 44, 13, 222, 333]));
console.log(quickSort([1, 5, 12, 311, 55, 44, 13, 222, 333]));
console.log(quickSort([1]));
console.log(quickSort([]));
console.log(quickSort([]));

const quickSortString = (arr: string[]): string[] => {
  if (arr.length < 2) {
    return arr;
  }

  // else choose a pivot
  const pivot = arr[0];

  const gt = arr.slice(1, arr.length).filter((x) => x > pivot);
  const lt = arr.slice(1, arr.length).filter((x) => x < pivot);
  return [
    ...quickSortString(lt),
    pivot,
    ...quickSortString(gt),
  ];
};

console.log(quickSortString([
  'daniel',
  'anna',
  'george',
  'fred',
  'danny',
  'jessica',
  'bruce',
  'jim',
]));
