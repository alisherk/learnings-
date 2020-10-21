/* 
  Given the number of letters shift letters based on the 
  number given 
  e.g. abcd => shift by 5 would end up at fghi 
*/

function ceasarCipher(str, shift) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let res = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const index = letters.indexOf(char);
    if (index === -1) {
      res += char;
      continue;
    }
    const encodedIndex = (index + shift) % letters.length;
    const item = letters[encodedIndex];
    res += item;
  }
  console.log(res); 
}

ceasarCipher('!abc', 100)