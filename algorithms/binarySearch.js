//function takes a sorted array returns of the valie that vas passed to search form

/* function binarySearch(sortedArr, value) {
  let left = 0;
  let right = sortedArr.length - 1; 

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArr[mid] === value) return mid;
    else if (sortedArr[mid] < value) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
 console.log(binarySearch([1,2,3,4], 4)); */

//binarary search tree recursive
function binaryRSearch(arr, value, start = 0, end = arr.length - 1) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === value) return mid;
  if (start >= end) return -1; 
  else if(arr[mid] < value) return  binaryRSearch(arr, value, mid + 1, end);
  else return binaryRSearch(arr, value, start, mid - 1)
}

console.log(binaryRSearch([1, 2, 3, 4], 5));
