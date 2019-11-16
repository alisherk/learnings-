const obj = {}; 

obj.fn = 'Alisher'; 
obj['ln'] = 'Kabildjanov'; 

let fn = obj['fn']; 
let ls = obj.ln;

Object.defineProperty(obj, 'country', { value: 'Canada', });

Object.defineProperties(obj, {
    facebook : {
        value: 'aliserg'
    }, 
    email: {
        value: 'aliserg@yahoo.com'
  }, 
}); 

const johnDoe = {
    fn: 'John', 
    ln: 'Doe',
    sayName(){
        return `My name is ${this.fn} ${this.ln}`; 
    }
};  

const janeDoe = Object.create(johnDoe, {
      fn: {value: 'Jane'}, 
      greet: {
         value: function(person) {
             return `Hello, ${person.fn}`; 
         }
      }
});

const jimSmith = Object.create(janeDoe, {
    fn: {value: 'Jim'}, 
    ln: {value : 'Smith'}, 
}); 

console.log(jimSmith.greet(janeDoe)); 





