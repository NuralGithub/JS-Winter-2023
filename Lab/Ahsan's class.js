let marks = [10, 11, 12, 13, 14, 15];
let names = ["adem", "nural", "bora", "melodi"];

let output = marks.splice(3, 1, 16);
let output1 = names.map((a) => a.toLocaleUpperCase());
let output2 = names.filter((ele) => ele.includes("a"));
let output3 = names.find((ele) => ele.includes("a"));

console.log(`\n Splice \n`);
console.log(marks);
console.log(output);
console.log(`\n Map \n`);
console.log(names);
console.log(output1);
console.log(`\n Filter \n`);
console.log(names);
console.log(output2);
console.log(`\n Find \n`);
console.log(names);

let a = "b";
a = "c";
