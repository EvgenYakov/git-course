// Группы
// Стандартная cpeдajavaScript предоставляет еще одну структуру данных,
// которая называется Set. Подобно экземпляру Мар, Set содержит коллекцию
// значений. В отличие от мар класс Set не связывает с ними другие значения -
// только отслеживает, какие значения являются частью множества. Значение
// может входить в состав множества только один раз - попытка добавить его
// снова не будет иметь никакого эффекта.
// Напишите класс с именем Group (поскольку имя Set уже занято). Как и Set,
// он располагает методами add, delete и has. Его конструктор создает пустую
// группу, add добавляет в нее значение (но только если такого значения там
// еще нет), метод delete удаляет свой аргумент из группы (если таковой там
// был), а has возвращает логическое значение, указывающее, является ли его
// аргумент членом группы.
// Для того чтобы определить, одинаковы ли два значения, используйте оператор === или 
// какой-либо его эквивалент, например indexof.
// Присвойте классу статический метод from, который принимает в качестве
// аргумента итерируемый объект и создает группу, содержащую все значения,
// полученные посредством перебора. 


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
            alert(item);
            if (!fentries.includes(item)) fentries.push(item);
        }
        return fentries;
    }

}

let g = new Group();

g.add(1);
g.add(2);
g.add(3);
console.log(g.has(2));
g.delete(2)
console.log(g);
console.log(Group.from("hello"));