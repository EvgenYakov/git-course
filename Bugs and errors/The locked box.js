// Запертый ящик
// Рассмотрим следующий (довольно надуманный) объект:
// const box = {
//     locked: true,
//     unlock() { this.locked = false; },
//     lock() { this.locked = true; },
//     _content: [],
//     get content() {
//         if (this.locked) throw new Error("Locked!");
//         return this._content;
//     }
// };
// Это ящик с замком. В ящике есть массив, но его можно получить, только
// если отпереть ящик. Прямой доступ к частному свойству _content запрещен.
// Нацишите функцию withBoxUnlocked, которая принимает в качестве аргумента
// функциональное значение, отпирает ящик, запускает функцию, а затем
// гарантирует, что прежде, чем завершить работу, ящик снова будет заперт
// независимо от того, возвратила функция-аргумент нормальный результат
// или вызвала исключение.
// ***Если хотите заработать дополнительные баллы, убедитесь, что при вызове
// **wi thBoxUnlocked, когда ящик уже открыт, он остается открытым. 

"use strict"

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    let test = box.locked;
    if (test) {
        box.unlock();
    }
    try {
        body();
    }
    finally {
        if (test) {
            box.lock();
        }
    }
}

withBoxUnlocked(function () {
    box.content.push("gold piece");
});
console.log(box.locked);
// true   

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);                    //Error raised: Pirates on the horizon! Abort!
}

box.unlock() // открываем для просмотра 
console.log(box.locked); // false
console.log(box.content); // наш контент после функции 

withBoxUnlocked(function () {
    box.content.push("silver piece");
});

consosle.log(box.locked); // проверям состояние, доп. задание если ящик открыт он остается открытым 

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e); // Error raised: Pirates on the horizon! Abort!
}

console.log(box.locked); // false 
console.log(box.content) // итошг выполнения функциии
