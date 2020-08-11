let nothingMuch: null = null;
let nothing: undefined = undefined;
let apples: number = 5;

//build in objects
let now: Date = new Date();

//array
let colors: string[] = ['red', 'green', 'blue'];
let truths: boolean[] = [true, false];

class Car {}

//let car: Car = new Car();

//Object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber1: (i: number) => void = (i: number) => {
  console.log(i);
};


let numbers = [-10, -9, 1];
let numAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numAboveZero = numbers[i];
  }
}


