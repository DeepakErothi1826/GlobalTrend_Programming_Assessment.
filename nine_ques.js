function filterEvenNumbers(arr) {
    return arr.filter(number => number % 2 !== 0);
  }
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let oddNumbers = filterEvenNumbers(numbers);
  console.log(oddNumbers); 