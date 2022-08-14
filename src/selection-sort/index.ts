const findSmallestByIndex = (arr: number[]) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  arr.forEach((n, i) => {
    if (smallest > n) {
      smallest = n;
      smallestIndex = i;
    }
  });

  return smallestIndex;
};

const selectionSort = (arr: number[]) : number[] => {
  const newArray: number[] = [];
  let list = [...arr];
  list.forEach(() => {
    const smallestIndex = findSmallestByIndex(list);
    newArray.push(list[smallestIndex]);
    list = [...list.filter((_, i) => i !== smallestIndex)];
  });

  return newArray;
};

console.log(selectionSort([3, 51, 132, 4, 14, 65, 865, 868, 7, 6, 868, 34, 5, 12]));
