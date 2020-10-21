/* 
  two inputs are passed into function arr & limit 
  chunk the arr into sub arrs based on this limit
*/

function chunk(arr, limit) {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i++) {
    const last = chunkedArr[chunkedArr.length - 1]; 
    if(!last || last.length === limit) {
        chunkedArr.push([arr[i]]); 
    } else {
        last.push(arr[i])
    }
  }
   console.log(chunkedArr)
}

chunk([1 ,2, 3], 2)
