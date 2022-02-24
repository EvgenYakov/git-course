// Было бы хорошо, если бы в Egg можно было писать комментарии. Например,
// всякий раз, когда в коде встретится символ ~решетка~(#), мы можем
// рассматривать оставшуюся часть строки как комментарий и игнорировать
// его, как // в JavaScript.
// Для того чтобы это реализовать, не нужно вносить большие изменения
// в синтаксический анализатор. Мы можем просто изменить skipSpace, чтобы
// пропускать комментарии, как если бы они были пробелами, чтобы все
// точки, где вызывается skipSpace, теперь пропускали также и комментарии. 
// Внесите это изменение. 
//-----------------https://eloquentjavascript.net/code/#12.3



// This is the old skipSpace. Modify it...
function skipSpace(string) {
    let str = string.replace(/\#.*?\n/g, "");
    let first = str.search(/\S/);
    if (first == -1) return "";
    return str.slice(first);
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
  // → {type: "apply",
  //    operator: {type: "word", name: "a"},
  //    args: []}