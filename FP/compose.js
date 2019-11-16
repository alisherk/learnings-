//compose 

const compose = (fn1, fn2) => (data) => fn1(fn2(data)); 
/* function compose(fn1, fn2){
    return function(data){
       return fn1(fn2(data));
    }
} */
const multiplyby3 = (num) => num * 3; 
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbs = compose(multiplyby3, makePositive); 
console.log(multiplyBy3AndAbs(-50));


//Pipe goes from left to right
const pipe = (f,g) => data => g(f(data)); 
const multiplyBy3AndAbs = compose(multiplyby3, makePositive); 
console.log(multiplyBy3AndAbs(-50));


