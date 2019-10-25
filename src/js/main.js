import blackjack from "blackjack-dealer-logic";



export default () =>{
  alert("It works!");
  const game =  blackjack.singleDeckGame;
  const gameIsRunning = true;
  const playButton = document.getElementById("playButton");
  // const hitButton = document.getElementById("hitButton");
  // const standButton = document.getElementById("standButton");
  // const doubleButton = document.getElementById("doubleButton");


  playButton.onclick = function(){
    // while (gameIsRunning){
      // alert("Let' Play BlackJack!" + game.getUserChips())
      document.getElementById("board")
      board.innerHTML = `Your current chip count is: ${game.getUserChips()}`
      const wager = Number(ask("Enter you bet"));
      game.receiveAnte(wager);
      document.write();

      // printCurrentAnte();
      // game.deal();
    
      game.resetPlayers();
    }

  }

  // function printCurrentAnte () {
  //   document.write(`Current Ante: ${game.getAnte()}`);
  // }
// }

  
  