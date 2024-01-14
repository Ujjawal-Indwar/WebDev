/*function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is: "+data);
}

function displayResultPassive(data) {
    console.log("Result of the passive sum is: "+data);
}
*/
//You can only call a single function and display the sum result

function sum(num1, num2, funToCall) {
  let result = num1 + num2;
    funToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is: " + data);
}

function displayResultPassive(data) {
  console.log("Result of the passive sum is: " + data);
}

sum(50, 50, displayResult);