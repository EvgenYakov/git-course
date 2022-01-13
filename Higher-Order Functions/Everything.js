// Analogous to the some method, arrays also have an every method. This one
// returns true when the given function returns true for every element in the array.
// In a way, some is a version of the || operator that acts on arrays, and every is
// like the && operator.
// Implement every as a function that takes an array and a predicate function
// as parameters. Write two versions, one using a loop and one using the some
// method

function mevery1(arr, pfunc) {

    for (let i = 0; i < arr.length; i++) {
        if (!pfunc(arr[i])) return false;
    }
    return true;
}




let a1 = [9, 10, 9, 7, 6];
let a2 = [1, 22, 5, 16];
let a3 = [];

console.log("Первая функция ---> " + mevery1(a1, (n) => n < 15));
console.log("Первая функция ---> " + mevery1(a2, (n) => n < 15));
console.log("Первая функция ---> " + mevery1(a3, (n) => n < 15));



function mevery2(arr, pfunc) {
    if (!arr.some((a) => {
        if (pfunc(a) == true) return false;
        else if (pfunc(a) == false) return true;
    }))
        return true
    else
        return false;

}

console.log("Вторая функция ---> " + mevery2(a1, (n) => n < 15));
console.log("Вторая функция ---> " + mevery2(a2, (n) => n < 15));
console.log("Вторая функция ---> " + mevery2(a3, (n) => n < 15));

