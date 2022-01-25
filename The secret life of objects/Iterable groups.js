// Сделайте класс Group из предыдущего упражнения итерируемым. Если вы
// не помните точный вид интерфейса итератора, перечитайте раздел, посвященный этому интерфейсу,
//ранее в данной главе.
// Если для представления членов группы вы использовали массив, не 
// возвращайте просто итератор, созданный путем вызова метода Symbol. i terator для
// массива. Это бы сработало, но оно не соответствует цели данного упражнения. 
// Если ваш итератор ведет себя странно, когда группа изменяется во время
// итерации, - это нормально. 
//------------------------------------------------------------------

class Group {
    constructor() {
        this.entries = [];
    }
    add(value) {
        if (this.length === 0) {
            this.entries.push(value);
            return
        }
        for (let i = 0; i < this.entries.length; i++) {
            if (value === this.entries[i]) { return }
        }
        this.entries.push(value);
        return
    }
    has(dvalue) {
        return this.entries.includes(dvalue);
    }
    delete(value) {
        for (let i = 0; i < this.entries.length; i++) {
            if (value === this.entries[i]) {
                this.entries.splice(i, 1);
            }
        }
    }
    static from(obj) {
        let fentries = [];
        for (let item of obj) {
            if (!fentries.includes(item)) fentries.push(item);
        }
        return fentries;
    }
    [Symbol.iterator]() {
        return new GroupIterator(this)
    }
}

class GroupIterator {
    constructor(cobj) {
        this.i = 0;
        this.entries = cobj.entries;
    }
    next() {
        if (this.i >= this.entries.length) return { done: true };
        let value = this.entries[this.i];
        this.i++;
        return { value, done: false }
    }
}

let g = new Group();

for (let val of Group.from("hello")) console.log(val);
