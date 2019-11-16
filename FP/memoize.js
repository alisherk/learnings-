const memoize = ()=> {
  let cache = {};
  return function(n) {
    for (n in cache) {
      return cache[n];
    }
    console.log('long time');
    cache[n] = n + 50;
    return cache[n];
  };
};

const memoize50 = memoize(); 
console.log(memoize50(50)); 
console.log(memoize50(50)); 
