const memoize = fn => new Proxy(fn, {
  cache: new Map(),
  apply (target, thisArg, args) {
    let cacheKey = argsList.toString();
    if(!this.cache.has(cacheKey)) this.cache.set(cacheKey, target.apply(thisArg, args));
    return this.cache.get(cacheKey);
  }
});

const fibonacci = n => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
const memoizedFibonacci = memoize(fibonacci);

for (let i = 0; i < 100; i ++)
  fibonacci(30);                      // ~5000ms
for (let i = 0; i < 100; i ++)
  memoizedFibonacci(30);              // ~50ms
