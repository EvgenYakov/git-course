// Write a function that computes the dominant writing direction in a string of
// text. Remember that each script object has a direction property that can be
// "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
// The dominant direction is the direction of a majority of the characters that
// have a script associated with them. The characterScript and countBy functions 
//defined earlier in the chapter are probably useful here.


// Для того чтобы скрипт запуститлся надо подключить некоторые файлы в HTML документе

// <script src="Higher-Order Functions/code/scripts.js"></script>
// <script src="Higher-Order Functions/code/chapter/05_higher_order.js"></script>
// <script src="Higher-Order Functions/code/intro.js"></script>



function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {

            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function dominantDir(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ name }) => name != "none");

    switch (scripts.length) {
        case 0:
            return 'no dominant direction found';
        case 1:
            return scripts[0].name;
        default:
            if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
                return 'no dominant direction found';
            } else {
                return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
            }
    }
}

console.log(dominantDir("ביתבית"));
console.log(dominantDir("Hello!ביתבית"));
console.log(dominantDir("Hello!"));
console.log(dominantDir("Hello!יתבית"));