class SpecialList {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();
  }

  values() {
    return this.data
      .filter(i => i.complete)
      .map(i => i.value)
      [Symbol.iterator]();
  }
}

const myList = new SpecialList([
  {complete: true, value: 'Lorem ipsum'},
  {complete: true, value: 'dolor sit amet'},
  {complete: false},
  {complete: true, value: 'adipiscing elit'}
]);

for(let item of myList) {
  console.log(item);  // The exact data passed to the SpecialList constructor above
}

for(let item of myList.values()) {
  console.log(item);  // 'Lorem ipsum', 'dolor sit amet', 'adipiscing elit'
}
