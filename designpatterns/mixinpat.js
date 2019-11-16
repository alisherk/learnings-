//mixin patterns in JS 

function Person(name) {
    this.name = name;
}

function Dog(name) {
    this.name = name;
}

const math = {
    doMath() {
        return `${this.name} can do math`
    }
}

const speaker = {
    speak() {
        return `${this.name} is speaking`;
    }
};

const mover = {
    walk() {
        return `${this.name} is walking`;
    },
    run() {
        return `${this.name} is running`;
    }
};

//let's start mixing objects 
Object.assign(Person.prototype, speaker, mover, math);
Object.assign(Dog.prototype, speaker, mover); 

let john = new Person('John');
let fido = new Dog('Fido');
console.log(john.run());
console.log(fido.run());
console.log(john.doMath()); 

 
