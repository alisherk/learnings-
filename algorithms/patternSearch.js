//given a text in first input and pattren as a second input
//determine if there is a pattern in the text
//e.g lollol, lol => count should be 2

function patternSearch(text, pattern) {
  let count = 0;
  for (let i = 0; i <= text.length; i++) {
    for (let j = 0; j <= pattern.length; j++) {
      const patternChar = pattern[j];
      const textChar = text[i + j];
      if (patternChar !== textChar) break;
      if (j === pattern.length - 1) count += 1;
    }
  }
  console.log(count);
}

patternSearch('lolol', 'lol')
