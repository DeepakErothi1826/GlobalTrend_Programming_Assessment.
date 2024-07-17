function fibonacci(n) {
    let num= [0, 1];
    for (let i = 2; i < n; i++) {
      num.push(num[i - 1] + num[i - 2]);
    }
    
    if (n === 1) {
      return [0];
    }
    return num.slice(0, n);
  }
  let n = 10;
  let fibonacciNum = fibonacci(n);
  console.log(fibonacciNum); 