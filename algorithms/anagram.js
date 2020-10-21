//a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
//or earth hearth

//write a function that takes 2 words, if words has exact the same charackters
//it returns true, otherwise it returns false
function anagram(str1, str2) {
  str1 = str1.replace(/[\W_]+/g, '').toLowerCase();
  str2 = str2.replace(/[\W_]+/g, '').toLowerCase();
  if (str1 != str2) return false;
  const tracker = {};
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    tracker[char] = tracker[char] + 1 || 1;
  }
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!tracker[char]) return false;
    --tracker[char];
  }
  return true;
}

console.log(anagram('heart', 'earth!'));
