//palindrome is a word that reads same forwards and backwords
//for example Madam

//write a function that check the string and returns
//true is the word is a palindrome

function isPalindrome(str) {
  if (typeof str !== 'string') throw new Error('input must be a string');
  const normalizedStr = str.toLowerCase();
  const reversedStr = normalizedStr.split('').reverse().join('');
  if (normalizedStr === reversedStr) return true;
  return false;
}

console.log(isPalindrome('Madame'));
