'use strict';

let scores = [0, 0],
    roundScore = 0,
    activePlayer = 0,
    dice;


//console.log(dice);
//document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';


let x = document.querySelector('#score--1').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';

function btn() {

}
btn();

document.querySelector('btn-roll').addEventListener('click', () => {

    dice = Math.floor(Math.random() * 6 + 1);


    //2 display result 

    document.querySelector('.dice').style.display = 'block';

    // update the tound score 



})


