

function sumOfSomething(a, b, cb) {
  console.log(typeof(cb));
  const val1 = cb(a);
  const val2 = cb(b);

  return val1 + val2;
}

console.log(sumOfSomething(2, 3,function (val) {
    return val * val * val;
}));
