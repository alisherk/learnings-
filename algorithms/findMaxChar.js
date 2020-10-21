//functions returns a letter in a word that
//appears more than any other

//e.g Hello will return { maxChar: L, maxCount: 2};

function findMaxChar(str) {
  
  let maxChar = '';
  let maxCount = 0;
  const tracker = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    tracker[char] = tracker[char] + 1 || 1; 
    if(tracker[char] > maxCount) {
        maxChar = char; 
        maxCount = tracker[char]; 
    }
  }
  return { maxChar, maxCount }; 
}; 

//test 
console.log(findMaxChar('hello')); 

