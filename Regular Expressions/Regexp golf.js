// Термином •кодовый гольф» называют игру, цель которой -
// описать определенную программу как можно меньшим количеством символов. 
// Аналогично rеgехр-голъф - это практика создания как можно более
// коротких регулярных выражений, описывающих данный шаблон и только
// его.
// Для каждого из следующих элементов напишите регулярное выражение,
// позволяющее проверить, встречается ли в строке какая-либо из указанных
// подстрок. Регулярное выражение должно соответствовать только строкам,
// содержащим одну из описанных подстрок. Не беспокойтесь о границах слов,
// если явно не указано иное. Когда ваше выражение сработает, проверьте,
// нельзя ли сделать его еще короче.
// 1. car и cat.
// 2. рор и prop.
// 3. ferret, ferry и ferrari.
// 4. Любое слово, оканчивающееся на ious.
// 5. Пробельный символ, за которым следуют точка, запятая, двоеточие или
// точка с запятой.
// 6. Слово длиннее шести букв.
// 7. Слово без буквы е (или Е).
// В качестве справочного пособия используйте список в разделе •Резюме•
// этой главы. Проверьте каждое решение с помощью нескольких тестовых
// строк. 


"use strict";

verify(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/p?pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(/ferr[et|y|ari]/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/\s[,.:;]/,
    ["bad punctuation ."],
    ["escape the period"]);

verify(/\w{7,}/,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);

verify(/\b[^\We]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
    }
}