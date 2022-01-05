// The == operator compares objects by identity. But sometimes you’d prefer to
// compare the values of their actual properties.
// Write a function deepEqual that takes two values and returns true only if they
// are the same value or are objects with the same properties, where the values
// of the properties are equal when compared with a recursive call to deepEqual.
// To find out whether values should be compared directly (use the === operator
// for that) or have their properties compared, you can use the typeof operator.
// If it produces "object" for both values, you should do a deep comparison.
// But you have to take one silly exception into account: because of a historical
// accident, typeof null also produces "object".
// The Object.keys function will be useful when you need to go over the properties of objects to compare them




"use strict";

function deepEqual(obj1, obj2) {
    if (((typeof obj1 == "object") && (obj1 != null)) && ((typeof obj2 == "object") && (obj2 != null))) {
        if (Object.keys(obj1).length != Object.keys(obj2).length) return false;
        else {
            let ao1 = Object.keys(obj1);
            let ao2 = Object.keys(obj2);
            let vao1 = Object.values(obj1);
            let vao2 = Object.values(obj2);
            let k = 0;
            for (let i = 0; i < ao1.length; i++) {
                for (let j = 0; j < ao2.length; j++) {
                    if (ao1[i] == ao2[j]) {

                        if (deepEqual(vao1[i], vao2[j]) == true) ++k;
                    }
                }

            }
            if (k == ao1.length) return true
            else return false
        }
    }
    else return obj1 === obj2;
}



let obj1 = {
    data: 2,
    ves: 3,
    name: "Dima",
    lop: {
        floor: " Man"
    }
};
let obj2 = {
    data: 2,
    ves: 3,
    name: "Dima",
    lop: {
        floor: " Man"
    }
}

console.log(deepEqual(obj1, obj2));

