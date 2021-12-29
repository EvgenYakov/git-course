// first task
// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let s = "";

for (let i = 0; i < 7; i++) {
    console.log(s += '#')
}