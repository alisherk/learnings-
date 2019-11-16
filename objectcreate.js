
var Car = function(color) {
    this.color = color; 
}

var car1 = new Car('red'); 
var car2 = Object.create(Car.prototype); 

Car.prototype = {
    getColor() {
        return this.color;
    }
}

const ToyCar = function() {

}

ToyCar.prototype = Object.create(Car.prototype); 

var legoCar = new ToyCar(); 

console.log(legoCar instanceof Car) 

Object.getPrototypeOf(legoCar).type; 

console.log(legoCar.type = 'Van'); 
 


