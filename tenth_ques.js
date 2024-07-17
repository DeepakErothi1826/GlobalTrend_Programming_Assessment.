function toTitleCase(str) {
    let words = str.split(' ');
    let titleCasedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return titleCasedWords.join(' ');
  }
  let sentence = "Hello World";
  let title = toTitleCase(sentence);
  console.log(title); 