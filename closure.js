//Example 1
/* const alisherSalary = (function(){
      
    let salary = 80000; 

    return {
        currentSalary() {
            return salary; 
        }, 

        increaseSalary(amount) {
            return salary + amount
        }, 

        dicreaseSalary(amount) {
            return salary - amount; 
        }   
    }
})(); 
console.log(alisherSalary.currentSalary()); 
console.log(alisherSalary.increaseSalary(5000)); 
console.log(alisherSalary.dicreaseSalary(5000)); 
 */

//Example 2
/* function person() {
  let name = 'Paul'; // Local variable
  const actions = {
    speak: function() {
      console.log('My name is ', name);
    }
  };
  return actions;
}

person().speak(); // Inner function invoked outside its lexical Scope */

//Example 4

/* function jump() {
    var height = 10;
    function scream() {
      console.log(height);
    }
  
    return scream;
  }
  
  var newJump = jump(); // function runs but doesnt log anything
  
  // you would think that now our code has run
  // you would think that javascript has gotten rid of our height variable
  
  // but we can still use the newJump function as if our content was still intact
  newJump(); // logs 10 */ 

/* //Example 4
function Car () {
      let type = ''; 
      return {
          setType(car) {
            type = car; 
          }, 
          getType() {
              console.log(type) 
          }

        }
  }

  const car1 = new Car(); 
  car1.setType('Honda'); 
  console.log(car1.getType());  */


//examples 

/*  const add = (function () {
    let counter = 0;
    return function () {
        counter += 1; 
        return counter
       }
  })();
  
  console.log(add());
  console.log(add());  */

//examples 6
/* const Person = (function () {
    let name = '';
    return {
      getPrivate: function () { return name; },
      setPrivate: function (n) { name = n; }
    }
  })();

  Person.setPrivate('Jon')
  console.log(Person.getPrivate());   */

/* var person = {
    firstName: 'Jimmy',
    lastName: 'Smith',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName (name) {
        var words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }
}

let fullname = 'Alisher Kabildanov'; 
let words = fullname.toString().split(' '); 
let fname = words[0] || ''; 
let lname = words[1] || ''; 
console.log(fname, lname);   */
