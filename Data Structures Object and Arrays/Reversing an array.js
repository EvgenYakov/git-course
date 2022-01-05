// Arrays have a reverse method that changes the array by inverting the order in
// which its elements appear. For this exercise, write two functions, reverseArray
// and reverseArrayInPlace. The first, reverseArray, takes an array as argument
// and produces a new array that has the same elements in the inverse order. The
// second, reverseArrayInPlace, does what the reverse method does: it modifies
// the array given as argument by reversing its elements. Neither may use the
// standard reverse method.

// Thinking back to the notes about side effects and pure functions in the
// previous chapter, which variant do you expect to be useful in more situations?
// Which one runs faster?
//-------------------------------------------------------------------------------

// Доболню код временем выполнения алгоритма
// Время выводится в консоль

//-------------------Старт------------------------
var time = performance.now();
//-------------------Старт------------------------


"use strict";


function reverseArray(arr) {
    let newa = new Array();
    for (let i = arr.length - 1; i >= 0; i--) {
        newa.push(arr[i]);
    }
    return newa;
}

let a = new Array(1, 2, 3, 4, 5);


console.log(reverseArray(a));

//--------------------Время первой функции-------------
time = performance.now() - time;
console.log('Время выполнения = ', time);
time = performance.now();
//-------------------Время первой функции--------------

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let t = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = t;
    }
}
reverseArrayInPlace(a)
console.log(a);


//-------------------Время выполнения второй функции---------
time = performance.now() - time;
console.log('Время выполнения = ', time);
//-------------------Время выполнения второй функции---------


