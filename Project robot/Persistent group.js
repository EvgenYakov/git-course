// Большинство структур данных, предоставляемых стандартной средой
// JavaScгipt, не очень хорошо подходят для хранения постоянных данных.
// У массивов есть методы slice и concat, которые позволяют легко создавать
// новые массивы, не повреждая старый. Но у Set, например, нет методов для
// создания нового множества с добавленным или удаленным элементом.
// Напишите новый класс PGroup, аналогичный классу Group из главы 6, в 
// котором хранится множество значений. Подобно Group, у него есть методы
// add, delete и has.
// Однако его метод add должен возвращать новый экземпляр PGroup с 
// добавленным заданным элементом, оставляя старый экземпляр без изменений.
// Аналогично delete создает новый экземпляр, в котором нет заданного
// элемента.
// Класс должен работать со значениями любого типа, а не только со строками.
//  Он не должен быть эффективным для большого количества значений.
// Конструктор не должен быть частью интерфейса класса (хотя вы определенно 
// захотите использовать его внутри класса). Вместо этого существует
// пустой экземпляр PGroup.empty, который можно применять в качестве начального
// значения.
// Зачем нужно единственное значение PGroup. empty, если можно создать
// функцию, которая бы каждый раз генерировала новый пустой словарь? 
// Проверял тут -----> https://eloquentjavascript.net/code/#7.3



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
