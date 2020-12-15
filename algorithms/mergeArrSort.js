//given 2 arrs eg [2,1,] [3,4,5,6]
//merge 2 arrays into array and ensure array is sorted

function mergeArrSort(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  const resultArr = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      resultArr.push(arr1[p1]);
      p1++;
    } else {
      resultArr.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    resultArr.push(arr1[p1]);
    p1++
  }

  while (p2 < arr2.length) {
    resultArr.push(arr2[p2]);
    p2++
  }

  return resultArr;
}

console.log(mergeArrSort([3, 4], [2, 4, 1])); 


