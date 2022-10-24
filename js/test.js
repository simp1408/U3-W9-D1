"use strict";
// class Prova{
//     text:string;
//     constructor(text:string){
//         this.text=text;
//     }
// }
// let testo= new Prova("testo di prova!");
// console.log(testo.text);
// let player_1= 10;
// let player_2=60;
let player_1;
let player_2;
//creo numero random
//faccio confronto
// function confronto(num1:number,num2:number){
// }
// 2 modi di inserire
let input1 = document.querySelector('#player1');
let input2 = document.querySelector('#player2');
let btn = document.querySelector('#button');
//se btn esiste
if (btn != null) {
    btn.addEventListener('click', confronto);
}
function confronto() {
    player_1 = Number(input1.value);
    player_2 = Number(input2.value);
    let computer = Math.floor((Math.random() * 100) + 1);
    console.log("player_1" + player_1);
    console.log("player_2" + player_2);
    console.log("computer" + computer);
    // per vedere chi dei 2 player si e avvicinato 
    // di piu mi devo  calcolare la differenza 
    // Math.abs ci da il valore assoluto quindi MAI negativo
    let diff1 = Math.abs(computer - player_1);
    let diff2 = Math.abs(computer - player_2);
    if (player_1 === computer) {
        console.log("player1 vince!!!");
    }
    else if (player_2 === computer) {
        console.log("player2 vince!!!");
    }
    else if (diff1 < diff2) {
        console.log("player 1 si avvicina di piu");
    }
    else {
        console.log("player 2 si avvicina di piu");
    }
}
