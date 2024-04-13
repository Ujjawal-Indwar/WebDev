function sq(x) {
  return x * x;
}
function cb(y) {
    return y * y*y;
}

function sumOfSomething(a, b,callbackfun) {
  const val1 = callbackfun(a);
  const val2 = callbackfun(b);

  return val1 + val2;
}

console.log(sumOfSomething(2, 3,sq));
