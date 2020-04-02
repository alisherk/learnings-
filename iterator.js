//signature of an iterator in JS 
/* const iterator = {
    next: () => ({
      value: any,
      done: Boolean
    })
  }

const iterable = {
    [Symbol.iterator](): iterator
  } */

  //reversing a string 
  const reverse = arr => ({
    [Symbol.iterator]() {
      let i = arr.length;
      return {
        next: () => ({
          value: arr[--i],
          done: i < 0
        })
      }
    }
  })

  //range 1
/*   const range = (start = 0, stop, step = 1) => {
    if (stop === undefined) {
      [start, stop] = [0, start]
    }
    start -= step
    return {
      [Symbol.iterator]: () => ({
        next: () => ({
          value: start += step,
          done: start >= stop
        })
      })
    }
  } */

  //range 2
/*   let range = {
    from: 1,
    to: 5,
  
    // for..of calls this method once in the very beginning
    [Symbol.iterator]() {
      // ...it returns the iterator object:
      // onward, for..of works only with that object,
      // asking it for next values using next()
      return {
        current: this.from,
        last: this.to,
        // next() is called on each iteration by the for..of loop
        next() { // (2)
          // it should return the value as an object {done:.., value :...}
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  for(let value of range) {
    console.log(value);
    ; // 1 then 2, then 3, then 4, then 5
  }

  //async iterate with range 
  let asyncRange = {
    from: 1,
    to: 5,
    // for await..of calls this method once in the very beginning
    [Symbol.asyncIterator]() { // (1)
      // ...it returns the iterator object:
      // onward, for await..of works only with that object,
      // asking it for next values using next()
      return {
        current: this.from,
        last: this.to,
  
        // next() is called on each iteration by the for await..of loop
        async next() { // (2)
          // it should return the value as an object {done:.., value :...}
          // (automatically wrapped into a promise by async)
  
          // can use await inside, do async stuff:
          await new Promise(resolve => setTimeout(resolve, 1000)); // (3)
  
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  (async () => {
    for await (let value of range) { // (4)
      console.log(value); // 1,2,3,4,5
    }
  })()
   */

  //iterator is a generator patterns

/*   let iteratorGenRange = {
    from: 1,
    to: 5,
  
    *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
  
  for(let value of iteratorGenRange) {
    console.log(value); // 1, then 2, then 3, then 4, then 5
  } */

  const asyncIteratorGenRange = {
    from: 1,
    to: 5,
  
    async *[Symbol.asyncIterator]() { // same as [Symbol.asyncIterator]: async function*()
      for(let value = this.from; value <= this.to; value++) {
  
        // make a pause between values, wait for something
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        yield value;
      }
    }
  };
  
  (async () => {
    for await (let value of asyncIteratorGenRange) {
      console.log(value); // 1, then 2, then 3, then 4, then 5
    }
  
  })();
