const fs = require("fs");

fs.readFile("ui.txt", "utf8", function(err, data){
  console.log(data);
})

console.log("yo");
let a = 0;
for (let i = 0; i < 1000000000000; i++){
    a++;
}
console.log("a = " + a);