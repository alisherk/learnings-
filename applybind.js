let obj = {num : 2}; 
let obj1 = {num : 5};

let addToThis = function (a, b, c){

    return this.num + a + b + c;
}
//call attaches obj and addToThis
//console.log(addToThis.call(obj, 3, 3, 3));  // functionname.call(obj, functionargs)
//console.log(addToThis.apply(obj, [1, 2, 3]));  // functionname.call(obj, functionargs)
//let bound = addToThis.bind(obj1); //bind give a function
//console.log(bound(1,2,3)); 

/* const person = { 
    name : 'Jon Doe', 
    greet(city) {
        console.log(`welcome ${ this.name } to ${ city }`); 
    }
}
 const Jane = {
     name: 'Jane Doe'
 }

 person.greet.call(Jane, 'Winnipeg'); */