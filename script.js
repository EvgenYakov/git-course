//-------------------------------------------------------------------------------
// Доболню код временем выполнения алгоритма
// Время выводится в консоль


"use strict";
//-------------------Старт------------------------
var time = performance.now();
//-------------------Старт------------------------

class PGroup {

    constructor(entries) {
        this.entries = entries;
    }

    add(value) {
        if (this.has(value)) return this;
        let p = new PGroup(this.entries.concat([value]));
        return p
    }

    has(dvalue) {
        return this.entries.includes(dvalue);
    }

    delete(value) {
        if (!this.has(value)) return this;
        let entries = this.entries;

        for (let i = 0; i < entries.length; i++) {
            if (value == entries[i]) {
                entries.splice(i, 1);
            }
        }
        return new PGroup(entries)
    }

}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a").add("b").add("c");
let ab = a.add("b");
let b = ab.delete("a");

console.log(a)
console.log(ab)
console.log(b)



//-------------------Время выполнения программы--------
time = performance.now() - time;
console.log('Время выполнения = ', time);
//-------------------Время выполнения программы---------


