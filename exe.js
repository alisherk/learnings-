const string = 'Hello there'; 


function reverseStr(str){
    if(!str || str.length < 1 || typeof str !== 'string'){
        throw new Error('input must be a string'); 
    }; 
    let backwards = []; 
    let totalItems = str.length - 1; 
    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i])
    }
    return backwards.join(''); 
}

function reverseStr2(str){
    return str.split('').reverse().join(''); 
}


console.log(reverseStr('hello world'));

function sum(arr) {
    let total = 0; 
    while (arr.length > 0){
        total += arr.pop()  
    }
    return total; 
}
 
console.log(sum([5,5]))

function range(str, end) {
    let arr = []; 
    while(str <= end){
        arr.push(str); 
        str++
    }; 
    return arr; 
}

console.log(range(1,5));

