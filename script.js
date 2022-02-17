//-------------------------------------------------------------------------------
// Доболню код временем выполнения алгоритма
// Время выводится в консоль


"use strict";
//-------------------Старт------------------------
var time = performance.now();
//-------------------Старт------------------------
function Promise_all(promises) {
    return new Promise((resolve, reject) => {

        let mas = [], i = 0, n = promises.length;

        for (let prom of promises) {

            prom.then(result => {
                mas.push(result);
                i++;
                if (i == n) resolve(mas);
            },
                error => (reject("error"))
            );

        }

        if (n === 0) resolve(mas);
    });
}

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
        console.log("We should not get here");
    })
    .catch(error => {
        if (error != "X") {
            console.log("Unexpected failure:", error);
        }
    });
//-------------------Время выполнения программы--------
time = performance.now() - time;
console.log('Время выполнения = ', time);
//-------------------Время выполнения программы---------


