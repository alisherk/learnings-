//easch sentence word is capitalized

function capitalize(str) {
  const splitWords = str.split(' ');
  const wordsCased = [];
  for (let i = 0; i < splitWords.length; i++) {
    const word = splitWords[i];
    wordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return wordsCased.join(' '); 
}

console.log(capitalize('small car')); 


