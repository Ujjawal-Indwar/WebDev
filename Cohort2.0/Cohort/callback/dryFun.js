function sq(x) {
  return x * x;
}

function cb(y) {
  return y * y * y;
}
function sumOfSquares(a, b) {
  const val1 = sq(a); //dry
  const val2 = sq(b);

  return val1 + val2;
}

function sumOfCubes(a,b) {
    const val1 = cb(a);//dry
    const val2 = cb(b);

    return val1 + val2;
}
console.log(sumOfSquares(2, 3));
console.log(sumOfCubes(2, 3));