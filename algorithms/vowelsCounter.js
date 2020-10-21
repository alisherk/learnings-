//functions functions all wovels and returns vowels count
//eg given input of cartoon function will retutn count of 3 as there are three vowles

function vowelsCounter(str) {
  str = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.indexOf(char) > -1) counter += 1;
  }
  console.log(counter);
}

vowelsCounter('cartoooon');
