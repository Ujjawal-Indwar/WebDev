function greet() {
    console.log('Hello');
}

setTimeout(greet, 5 * 1000); // 5 seconds later greet function is called


function arithmetic(a, b, arithmeticFun) {
    const ans = arithmeticFun(a, b);
    return ans;

}

function mul(c,d) {
    return c * d;
}

const val = arithmetic(10, 100, mul);
console.log(val);