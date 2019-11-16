//decorator patters with a lot of repetitive steps 

/* function Coffee() {

}

Coffee.prototype.cost = function() {
    return 5; 
}

Coffee.small = function(coffeeObj) {
    let cost = coffeeObj.cost(); 
    coffeeObj.cost = function() {
        return cost - 1; 
    };
}; 

Coffee.medium = function(coffeeObj) {}; 

Coffee.large = function(coffeeObj) {
    let cost = coffeeObj.cost(); 
    coffeeObj.cost = function() {
        return cost + 1; 
    };
}; 

Coffee.sugar = function(coffeeObj) {
    let cost = coffeeObj.cost(); 
    coffeeObj.cost = function() {
        return cost + .15; 
    };
}; 

Coffee.creamer = function(coffeeObj) {
    let cost = coffeeObj.cost(); 
    coffeeObj.cost = function() {
        return cost + .15; 
    };
}; 

Coffee.milk = function(coffeeObj) {
    let cost = coffeeObj.cost(); 
    coffeeObj.cost = function() {
        return cost + .15; 
    };
}; 

Coffee.foam = function(coffeeObj) {
    let cost = coffeeObj.cost(); 
    coffeeObj.cost = function() {
        return cost + .15; 
    };
}; 

Coffee.mocha = function(coffeeObj) {
    
    Coffee.milk(coffeeObj); 
    Coffee.creamer(coffeeObj);
    let cost = coffeeObj.cost(); 
    
    coffeeObj.cost = function() {
          return cost
    };
        
     
}; 

const coffee = new Coffee();

console.log(Coffee.large(coffee));
console.log(coffee.cost()) */

//Decorator patterns using inheritance 
function Beverage() {
    this._cost = 0; 
}
Beverage.prototype.cost = function() {
    return this._cost; 
}; 
//technically we created an abstract object because will be created 
//specific beverages on this objec and providing specific implementation

//beverage decorator 
function BeverageDecorator(beverage) {
    Beverage.call(this);
    this.beverage = beverage; 
}

//Setting up prototypal inheritance in beverage decorator 
BeverageDecorator.prototype = Object.create(Beverage.prototype); 

BeverageDecorator.prototype.cost = function() {
    return this._cost + this.beverage.cost(); 
}; 

function Small(beverage){
    BeverageDecorator.call(this, beverage); 
    this._cost = -1; 
}

Small.prototype = Object.create(BeverageDecorator.prototype); 

function Sugar(beverage){
    BeverageDecorator.call(this, beverage); 
    this._cost = .15; 
}

Sugar.prototype = Object.create(BeverageDecorator.prototype); 



function Coffee() {
    Beverage.call(this); 
    this._cost = 5
}

Coffee.prototype = Object.create(Beverage.prototype); 

let coffee = new Coffee(); 
coffee = new Small(coffee)

console.log(coffee.cost())




