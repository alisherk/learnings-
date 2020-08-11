
type arr = Array<number>;

const last = (arr: Array<number>) => {
  return arr[arr.length - 1];
};
//this works
const l = last([1, 2, 3]);

//but this does not work, we can not pass it strings into the funct
const l2 = last(['a', 'b', 'c']);

//what if we want function to be flexible with values passed in
//generics can help types to be flexible
const fLast = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};
//we can explicitly say what is the returning type of the generic
const fLast1 = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};
//now this works with nums
const fL = fLast([1, 2, 3]);
//and this works with strings
const fl2 = fLast(['a', 'b', 'c']);
//we can explicitly say what type of arra this function  should be
const fl3 = fLast<string>(['a', 'b', 'c']);

const makeArr = (x: number) => {
  return [x];
};

const v = makeArr(5);

//this wont work
const v2 = makeArr('a');

//lets turn the function into a generic
const makeArr1 = <T>(x: T): T[] => {
  return [x];
};

//you can also add multiple generic types
const makeArr2 = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};
//we can default type to a generic
const makeArr3 = <X, Y = null>(x: X, y: Y): [X, Y] => {
  return [x, y];
};
//so now we can pass any values to our function
const v3 = makeArr2(1, 2);
const v4 = makeArr2('a', 'b');

//we can override what it returns
makeArr2<string, number>('a', 1);
//or event add union types
makeArr2<string | null, number>(null, 5);

//we can extend as well
const makeFullName = (obj: { firstName: string; lastName: string }) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  };
};

//but what happens we want to add an object that has at least those two fiels
//this would give an error we we add age
//makeFullName({ firstName: 'ali', lastName: 'serg', age: 21})

//we can use generics to extend on object. This would require that obj has at least firstName and lastName
const makeFullName2 = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  };
};
makeFullName2({ firstName: 'ali', lastName: 'carl', age: 21 });

//you can do generics with interfaces amd we want data to be flexible
interface Tab<T> {
  id: string;
  position: string;
  data: T;
}

type NumTab = Tab<number>;
//euivalent to
type NumberTab = {
  id: string;
  position: number;
  data: number;
};
//we can create different types of tabs
type StringTab = Tab<string>;

class HoldAnything1<T> {
    data: T;
    constructor(type: T) {
      this.data = type;
    }
  }
  class HoldAnything2<T> {
    constructor(public data: T) {}
  
    add(a: T): T {
      return a;
    }
  }
  
