const myPromisify = (fn) => {
    return (...args) => {
      return new Promise((resolve, reject) => {
        function cb(err, ...results) {
          if (err) {
            return reject(err)
          }
          return resolve(results.length === 1 ? results[0] : results) 
         }
         args.push(cb)
         fn.call(null,...args)
       })
    }
 }

 const getSumAsync = (num1, num2, cb) => {
    if (!num1 || !num2) {
      return cb(new Error("Missing dependencies"), null);
    }
    const sum = num1 + num2;
    const message = `Sum is ${sum}`
    return cb(sum, message);
  }

  getSumAsync(1, 1, (res, msg) => console.log(res, msg))

const getSumPromise = myPromisify(getSumAsync); 

getSumPromise(1, 1).then((result) => console.log(result)).catch(err => console.log(err))

/* async function start(){
  const result = await getSumPromise(1,1); 
  console.log(result);
}

start()
 */

  

