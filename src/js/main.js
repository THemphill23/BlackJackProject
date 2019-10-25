import blackjack from "blackjack-dealer-logic";



export default () =>{
  alert("It works!");
  const game =  blackjack.singleDeckGame;
  const gameIsRunning = true;
  const playButton = document.getElementById("playButton");
  const hitButton = document.getElementById("hitButton");
  const standButton = document.getElementById("standButton");
  const doubleButton = document.getElementById("doubleButton");


  playButton.onclick = function(){
    while (gameIsRunning){
      alert("Let' Play BlackJack!" + game.getUserChips())
      game.deal();
      
    
      game.resetPlayers();
    }

  }

  

  
  // const deal = function (){
   
  // }
  // const app = document.getElementById("app");

  // playButton.onclick = function() {
  // alert("Let's Play BlackJack!")
  // }
}

  
  