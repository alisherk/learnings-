//function takes an int and reverses it e.g 10 becomes 01

function reverseInt(n) {
    let zeroHolder = '0'; 
    let arr = n.toString().split(''); 
    if(!arr[arr.length -1].includes('0')) zeroHolder = ''; 
    let reversed = arr.reverse().join(''); 
    reversed = parseInt(reversed); 
    if(n < 0) return zeroHolder + '' + reversed * - 1; 
    return  zeroHolder + '' + reversed; 
}

console.log(reverseInt(311)); 