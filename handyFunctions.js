//convert two dimentional array into object 
const myArray = [['one', 1], ['two', 2], ['three', 3]];
const obj = Array.from(myArray).reduce((acc, [key, val]) => Object.assign(acc, {[key]: val}), {});

console.log(obj);// => {one: 1, two: 2, three: 3}

//flatten array 
const arr = ['a', 'b', ['c', 'd']];
const flattened = [].concat.apply([], arr);
// orconst flattened =  [].concat(...arr);
console.log(flattened); // => ["a", "b", "c", "d"]