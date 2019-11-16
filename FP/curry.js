
const multiply1 = (a) => (b) => a * b;
const multiplyBy5 = multiply1(5); 
console.log(multiplyBy5(5)); 

function multiply2(a) {
    return function(b){
       return a * b 
    }
}; 

const multiplyBy4 = multiply2(4); 
console.log(multiplyBy4(4));
