// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// When you have a program that generates this pattern, define a binding size
// = 8 and change the program so that it works for any size, outputting a grid
// of the given width and height



"use strict";

let l = +prompt('Введите длинну сетки:');
let h = +prompt('Введите высоту сетки:');
let s = "";

for (let i = 1; i <= h; i++) {

    if (i % 2 == 1)
        for (let j = 0; j < l; j++) {
            if (j % 2 == 0) {
                s += ' ';
            }
            else if (j % 2 == 1) {
                s += '#';
            }
        }

    else

        for (let j = 0; j < l; j++) {
            if (j % 2 == 0) {
                s += '#';
            }
            else if (j % 2 == 1) {
                s += ' ';
            }

        }

    console.log(s);
    s = "";
}