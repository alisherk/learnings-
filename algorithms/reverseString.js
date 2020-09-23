const string = 'Hello there';

function reverseStr1(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    res = str[i] + res;
  }
  return res;
}

function reverseStr2(str) {
  if (!str || str.length < 1 || typeof str !== 'string') {
    throw new Error('input must be a string');
  }
  let backwards = [];
  let totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

function reverseStr3(str) {
  return str.split('').reverse().join('');
}

function reverseStr4(str) {
  return str.split('').reduce((acc, tail) => {
    acc = tail + acc;
    return acc; 
  },'');
}

reverseStr4(string)

function sum(arr) {
  let total = 0;
  while (arr.length > 0) {
    total += arr.pop();
  }
  return total;
}

function range(str, end) {
  let arr = [];
  while (str <= end) {
    arr.push(str);
    str++;
  }
  return arr;
}
