// Представьте, что у вас есть функция primitiveMultiply, которая в 20 % случаев
//  умножает два числа, а в остальных 80 % случаев возникает исключение
// типа MultiplicatorUnitFailure. Напишите функцию, оборачивающую эту
// неуклюжую функцию и просто продолжающую попытки до тех пор, пока
// вызов не завершится успешно, после чего возвращающую результат.
// Убедитесь, что вы обрабатываете только те исключения, которые рассчитываете обработать. 


class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b)
    } catch (MultiplicatorUnitFailure) {
        return reliableMultiply(a, b)
    }
}
console.log(reliableMultiply(8, 8));