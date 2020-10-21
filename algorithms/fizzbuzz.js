/*
if item is divisile by 3 it says fizz 
if item is divisible by 5 it says buzz
if item us divisible by both 3 and 5 it says fizzbuzz 
*/

function fizzBuzz(n) {
  let str = '';
  if (n % 3 === 0) str += 'fizz';
  if (n % 5 === 0) str += 'buzz';
  console.log(str);
}

function fizzbuzz2(n) {

  for (let i = 1; i <= n; i++) {
    let str = '';
    if (i % 3 === 0) str += 'fizz';
    if (i % 5 === 0) str += 'buzz';
    if (str === '') str = i;
    console.log(str);
  }
}

fizzbuzz2(15);
