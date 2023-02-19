/**
 * Q1: Write code to remove given value from the given array
 * Points: 30
 * 
 * [1, 2, 3, 4, 5] , 2  -> [1, 3, 4, 5]
 * 
 * [21, 32, 12, 43, 45, 65, 12], 12 -> [21, 32, 43, 45, 65]
 * 
 * [-1, 2, 43, 65] , 11 -> [-1, 2, 43, 65]
 */
console.log('\nQ1');
const arr1 = [21, 32, 12, 43, 45, 65, 12];
const num1 = 12;
let arr1Result = [];        // final ans should be in this variable (get values in arr1Result from arr1 which are NOT equals to num1)
​
// code
​
console.log(arr1);          // [21, 32, 12, 43, 45, 65, 12];
console.log(arr1Result);    // [21, 32, 43, 45, 65];
​
​