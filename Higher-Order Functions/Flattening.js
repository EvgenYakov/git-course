// Use the reduce method in combination with the concat method to “flatten”
// an array of arrays into a single array that has all the elements of the original
// arrays.


"use strict";


let arr1 = new Array([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]);
let arr2 = new Array(5, 6, 7, 8);


console.log(arr1.reduce((pr, cr) => pr.concat(cr)));