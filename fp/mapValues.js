const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    console.log(k)
    acc[k] = fn(obj[k]);
    console.log(acc)
    return acc;
  }, {});


//EXAMPLES
const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
};

const arr = mapValues(users, u => u.user);
//console.log(arr);
