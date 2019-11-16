//one way to perform true inheritance is by chaining prototypes
function Beverage(name, temp) {
    this.name = name; 
    this.temp = temp
}; 

Beverage.prototype.drink = function() {
    console.log(`I am drinking ${this.name}`); 
}; 

function Coffee(type) {
    Beverage.call(this, 'coffee', 'hot'); 
    this.type = type; 
}

//setting up protype chain
Coffee.prototype = Object.create(Beverage.prototype);

Coffee.prototype.sip = function() {
    console.log(`Sipping some ${this.type} ${this.name}`);
}; 

let water = new Beverage('water', 'cold'); 
let coffee = new Coffee('bold dark roast'); 

console.log(coffee.drink())

