import blackjack from "blackjack-dealer-logic";


export default () =>{
  alert("It works!");
  const game =  blackjack.singleDeckGame;
  const gameIsRunning = true;
  const playButton = document.getElementById("playButton");


  playButton.onclick = function(){
    // while (gameIsRunning){
      alert("Let' Play BlackJack!" + game.getUserChips())
      document.getElementById("board")
      board.innerHTML = `Your current chip count is: ${game.getUserChips()}`
      // game.wager()
      // game.receiveAnte(wager);
      // game.getAnte()
      // document.write();

      game.resetPlayers();
    }

  }
  
  