function removeDuplicates(arr) {
    let uniqueSet = new Set(arr);
    return [...uniqueSet];
  }
  let arrayduply= [1, 2, 2, 3, 4, 4, 5];
  let uniqueArray = removeDuplicates(arrayduply);
  console.log(uniqueArray); 
  