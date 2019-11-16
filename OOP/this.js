//binding of this with new key word
function Person(name, age){
    this.name = name; 
    this.age = age;
}

const pers1 = new Person('Bob', 55); 
console.log(pers1.name);

//implicit binding pf this keyword 
const person1 = {
    name: 'Karen', 
    age: 40, 
    hi(){
        console.log('hi ' + this.name);   
    }
};

//expilic binding 
const person3 = {
    name: 'Karen', 
    age: 40, 
    hi: function(){
        console.log('hi ' + this.setTimeout);   
    }.bind(global), 

};

person3.hi()

//arrow functions 

const person4 = {
    name: 'Karen', 
    age: 40, 
    hi: function(){
        //if there is no arrow function, this will refer to the global obj
        var inner = () => {
            console.log('hi ' + this.name);
        }
        return inner()
    }, 

};

person4.hi()

