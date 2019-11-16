const multiply = (a, b, c) => a * b * c; 

const multiplyTwoNumbsBy5 = multiply.bind(null, 5); 
console.log(multiplyTwoNumbsBy5(2, 2)); 