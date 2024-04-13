function sq(x) {
  return x * x;
}

function sumOfSquares(a, b) {
  const val1 = sq(a);
  const val2 = sq(b);

  return val1 + val2;
}

console.log(sumOfSquares(2, 3));
