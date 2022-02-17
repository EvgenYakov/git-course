// Для заданного массива промисов Promise.all возвращает промис,
// который ожидает завершения всех промисов в массиве. Метод успешен,
// если получаем массив значений результатов. Если один из промисов в
// массиве не выполнится, то промис, возвращаемый all, также не
// выполнится, и причиной отказа итогового промиса будет причина отказа
// невыполненного промиса из массива.n Реализуйте нечто подобное
// самостоятельно в виде обычной функции с именем Promise_all.
// Помните, что после того, как промис выполнен успешно или же не выполнен,
// он не может быть выполнен или не выполнен снова, и дальнейшие вызовы функций,
// которые его разрешают, игнорируются.
//  Это может упростить способ обработки промиса в вашей функции. 


// Проверял тут ---> https://eloquentjavascript.net/code/#11.2

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