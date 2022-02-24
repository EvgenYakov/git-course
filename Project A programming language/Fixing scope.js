// Сейчас единственным способом присвоить привязке значение является
// define.Эта конструкция действует и для определения новых привязок,
//  для назначения существующим привязкам нового значения.
// Такая двусмысленность становится источником проблем.Если попытаться
//  присвоить нелокальной привязке новое значение, мы вместо этого
// 256 Глава 12. Проект: язык программирования
// определим локальную привязку с тем же именем.Некоторые языки так
// и работают, но я всегда считал, что это некрасивый способ обработки
// области видимости. Добавьте специальную форму set, аналогичную define,
// которая назначает привязке новое значение, обновляя привязку во внешней
// области видимости, если она еще не существует во внутренней области.Если
// привязка вообще не определена, должно генерироваться исключение
// ReferenceError (еще один стандартный тип ошибки).
// Технология представления областей видимости как простых объектов,
// которая до сих пор была для нас удобной, теперь будет немного мешать.
// Возможно, вы захотите использовать функцию Object.getPrototypeOf, возвращающую
// прототип объекта.Помните также, что области видимости не являются производными
// от Object.prototype, поэтому если вы хотите вызывать для них hasOwnProperty, то
// придется использовать такое неуклюжее выражение:
// Object.prototype.hasOwnProperty.call(scope, name);
// проверял тут ---->https://eloquentjavascript.net/code/#12.4


specialForms.set = (args, scope) => {
    if (args.length != 2 || args[0].type != "word") {
        throw new SyntaxError("Incorrect use of set");
    }
    let name = args[0].name;
    let val = evaluate(args[1], scope);
    for (let scope2 = scope; scope2; scope2 = Object.getPrototypeOf(scope2)) {
        if (Object.prototype.hasOwnProperty.call(scope2, name)) {
            scope2[name] = val;
            return val;
        }
    }
    throw new ReferenceError(`Undefined variable`);
};

run(`
  do(define(x, 4),
     define(setx, fun(val, set(x, val))),
     setx(50),
     print(x))
  `);
// → 50
run(`set(quux, true)`);
  // → Some kind of ReferenceError