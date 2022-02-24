// Дополните Egg поддержкой массивов, добавив в верхнюю область видимости
// следующие три функции: array(...values) для создания массива,
// содержащего значения аргументов, содержащего значения аргументов,
// length(array) для получения длины массива и elemeпt(array, n),
// чтобы получить n - й элемент массива

// Проверял тут ---> https://eloquentjavascript.net/code/#12.1


topScope.array = function () {
    return [...arguments]
};
topScope.length = (arr) => {
    return arr.length;
};
topScope.element = (arr, i) => {
    return arr[i];
};

run(`
  do(define(sum, fun(array,
       do(define(i, 0),
          define(sum, 0),
          while(<(i, length(array)),
            do(define(sum, +(sum, element(array, i))),
               define(i, +(i, 1)))),
          sum))),
     print(sum(array(1, 2, 3))))
  `);
  // → 6