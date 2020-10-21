//Proxy with Reflect API
//here is the simple object without getters and setters when can create
//getters and setters with Proxy and Reflect API

let user = {
    name: "John",
  };
  
  user = new Proxy(user, {
    get(target, prop, receiver) {
      console.log(`GET ${prop}`);
      return Reflect.get(target, prop, receiver); // (1)
      //same as return target[prop]
    },
    set(target, prop, val, receiver) {
      console.log(`SET ${prop}=${val}`);
      return Reflect.set(target, prop, val, receiver); // (2)
    }
  });
  //console.log(user.name);
  //change the name in the user to Pete
  user.name = "Pete"; // shows "SET name=Pete"
  //console.log(user);

//Reflect.get reads an object property.
//Reflect.set writes an object property and returns true if successful, false otherwise.
//In most cases we can do the same without Reflect, for instance, reading a property Reflect.get(target, prop, receiver) can be replaced by target[prop]. There are important nuances though.


/* We can wrap a proxy around a function as well.

The apply(target, thisArg, args) trap handles calling a proxy as function:

target is the target object (function is an object in JavaScript),
thisArg is the value of this.
args is a list of arguments. */
function delay(f, ms) {
    return new Proxy(f, {
      apply(target, thisArg, args) {
        setTimeout(() => target.apply(thisArg, args), ms);
      }
    });
  }
  
  function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }
  
  sayHi = delay(sayHi, 3000);
  
  //console.log(sayHi.length); // 1 (*) proxy forwards "get length" operation to the target
  
  //sayHi("John"); // Hello, John! (after 3 seconds)





//with get trap
/* To intercept reading, the handler should have a method get(target, property, receiver).

It triggers when a property is read, with following arguments:

target – is the target object, the one passed as the first argument to new Proxy,
property – property name,
receiver – if the target property is a getter, then receiver is the object that’s going to be used as this in its call. Usually that’s the proxy object itself (or an object that inherits from it, if we inherit from proxy). Right now we don’t need this argument, so it will be explained in more detail later.
 */

let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop, receiver) {
    console.log('reciver', receiver);
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // default value
    }
  }
});

console.log( numbers[1] ); // 1
console.log( numbers[123] ); // 0 (no such item)


/* target – is the target object, the one passed as the first argument to new Proxy,
property – property name,
value – property value,
receiver – similar to get trap, matters only for setter properties. */

//let numbers = [];

/* numbers = new Proxy(numbers, { // (*)
  set(target, prop, val, receiver) { // to intercept property writing
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers.push(1); // added successfully
numbers.push(2); // added successfully */
//numbers.push("test"); // TypeError ('set' on proxy returned false)

