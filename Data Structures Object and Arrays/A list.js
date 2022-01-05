// Objects, as generic blobs of values, can be used to build all sorts of data structures.
//  A common data structure 
// is the list (not to be confused with array). A
// list is a nested set of objects, with the first object holding a reference to the
// second, the second to the third, and so on.
// let list = {
//      value: 1,
//      rest: {
//          value: 2,
//          rest: {
//              value: 3,
//              rest: null
// }
// }
// };
// A nice thing about lists is that they can share parts of their structure. For
// example, if I create two new values {value: 0, rest: list} and {value: -1,
// rest: list} (with list referring to the binding defined earlier), they are both
// independent lists, but they share the structure that makes up their last three
// elements. The original list is also still a valid three-element list.

// Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument. Also write a listToArray function
// that produces an array from a list. Then add a helper function prepend, which
// takes an element and a list and creates a new list that adds the element to the
// front of the input list, and nth, which takes a list and a number and returns
// the element at the given position in the list (with zero referring to the first
// element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.
//-------------------------------------------------------------------------------
// Доболню код временем выполнения алгоритма
// Время выводится в консоль

"use strict";

function arrayToList(arr) {
    let list = {};
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let arr = new Array();
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr
}

function prepend(el, list) {
    let nlist = {};
    nlist.value = el;
    nlist.rest = list
    return (nlist)
}

function nth(list, el) {
    if (el == 1) {
        return list.value;
    }
    else {
        --el;
        return nth(list.rest, el);
    }
}


let arr = new Array(1, 2, 3, 4);

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

console.log(listToArray(list))
console.log(arrayToList(arr));
console.log(prepend(33, list));
console.log(nth(list, 1));




