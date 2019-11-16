var points = [40, 100, 1, 5, 25, 10];

  var len = points.length;
  console.log(len)
  var max = -Infinity;
  while (len--) {
    console.log(len);
    if (points[len] > max) {
      max = points[len];
      console.log(max)
    }
  }









