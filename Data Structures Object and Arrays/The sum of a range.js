// The introduction of this book alluded to the following as a nice way to compute
// the sum of a range of numbers:
// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does
// indeed return 55.
// As a bonus assignment, modify your range function to take an optional third
// argument that indicates the “step” value used when building the array. If no
// step is given, the elements go up by increments of one, corresponding to the
// old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
// 9]. Make sure it also works with negative step values so that range(5, 2, -1)
// produces [5, 4, 3, 2].

"use strict";

function range(a, b, s) {
    let arr = new Array();
    if (a < b && s > 0)
        for (let i = a; i <= b; i += s) {
            arr.push(i)
        }
    else if (a > b && s < 0)
        for (let i = a; i >= b; i += s) {
            arr.push(i)
        }
    else
        return "Значения не корректны"

    return arr;
}

function sum(arr) {
    return arr.reduce((s, a) => s += a)
}


let a = +prompt("Введите a ")
let b = +prompt("Введите b ")

let s = +prompt("Введите step ")

if (range(a, b, s) != "Значения не корректны")
    alert("Элеменеты в диапазоне от а=" + a + " до b=" + b + "-->" + range(a, b, s) + "\nих сумма = " + sum(range(a, b, s)));
else alert(range(a, b, s))




