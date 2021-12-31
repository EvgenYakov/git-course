// The previous chapter introduced the standard function Math.min that returns
// its smallest argument. We can build something like that now. Write a function
// min that takes two arguments and returns their minimum.

let min = (a, b) => {
    if (a > b) return b
    else if (a < b) return a
    else alert("Числа равны")
}

let b = +prompt("Введите число b");
let a = +prompt("Введите число а");
alert(`Меньшее число = ${min(a, b)}`)
