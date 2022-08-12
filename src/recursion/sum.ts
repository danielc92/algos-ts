// Recursion example #2: Adding numbers from array (without reduce)

const sumNumbers = (numbers: number[], base: number): number => {
    if (numbers.length) {
      const newBase = base + numbers[numbers.length - 1];
      const newNumbers = numbers.slice(0, numbers.length - 1);
      return sumNumbers(newNumbers, newBase);
    }
    return base;
  };
  
  console.log(sumNumbers([1, 2, 10], 0));
  console.log(sumNumbers([], 0));
  console.log(sumNumbers([10, 12], 0));
  
  console.log(sumNumbers([1, 2, 3, 4, 5, 6, 7, 8], 0));