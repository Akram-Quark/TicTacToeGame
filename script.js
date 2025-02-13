console.log("Welcome to Tic Toc Toe Game")
let music = new Audio("click-beat.mp3")
let musicTurn = new Audio("ting.mp3")
let gameOver = new Audio("wrong-buzzer.mp3")
let turn = "X"
let gameover = false;

//function to change turn
const changeTurn = () => {
   return turn === "X"?"O":"X"
}

//function to check winner
const checkWin = () => { 
   let boxtext = document.getElementsByClassName('boxtext');
   let wins = [
      [0, 1, 2, 5, 5, 0],
      [3, 4, 5, 5, 15, 0],
      [6, 7, 8, 5, 25, 0],
      [0, 3, 6, -5, 15, 90],
      [1, 4, 7, 5, 15, 90],
      [2, 5, 8, 15, 15, 90],
      [0, 4, 8, 5, 15, 45],
      [2, 4, 6, 5, 15, 135],
   ]

   wins.forEach(e => {
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
         document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON "
         gameover = true;
         document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "100px";
         document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
         document.querySelector(".line").style.width = "20vw";
      }
   })
}

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
   let boxtext = element.querySelector('.boxtext');
   element.addEventListener('click',()=>{
      if(boxtext.innerText === ''){
         boxtext.innerText = turn;
         turn = changeTurn();
         musicTurn.play();
         checkWin();
         if(!gameover){
         document.getElementsByClassName("info")[0].innerText = turn + " Turn";
         }
      }
   })
})

//Add onclick listener to reset button
reset.addEventListener('click',() => {
   let boxtexts = document.querySelectorAll('.boxtext');
   Array.from(boxtexts).forEach(element => {
      element.innerText = ""
   });
   turn = "X";
   gameover = false;
   document.querySelector(".line").style.width = "0vw";
   document.getElementsByClassName("info")[0].innerText = turn + " Turn";
   document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
})