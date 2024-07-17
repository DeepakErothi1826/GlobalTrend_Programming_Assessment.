function capital(str) {
    let words = str.split(' ');
    let capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
  }
  
  let sentence = "hello world this is  test";
  let capitalSent = capital(sentence);
  console.log(capitalSent); 