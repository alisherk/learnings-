/* given the list of non sorted integers, find if two numbers equal the
sum passed an an input  */

//1 long version
const findSum = (arr, sum) => {
  let searchValues = new Set();
  searchValues.add(sum - arr[0]);
  for (let i = 1, length = arr.length; i < length; i++) {
    let searchVal = sum - arr[i];
    if (searchValues.has(arr[i])) return true;
    else searchValues.add(searchVal);
  }
  return false;
};

findSum([5,5], 10); 
//short version
/* const findSum = (arr, sum) =>
  arr.some((set => n => set.has(n) || !set.add(sum - n))(new Set())); */
