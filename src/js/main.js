import blackjack from "blackjack-dealer-logic";


export default () =>{
  alert("Welcome");
  const game =  blackjack.singleDeckGame;
  const gameIsRunning = true;
  const playButton = document.getElementById("playButton");
  const betButton = document.getElementById("betButton")

  playButton.onclick = function(){
    // while (gameIsRunning){
      // alert("Let' Play BlackJack!" + game.getUserChips())

      document.getElementById("board")
      board.innerHTML = `Your current chip count is: ${game.getUserChips()}`

      // betButton.onclick = function(){
        const wager =window.prompt("Enter your bet:")
        
        game.receiveAnte(wager);
        
      document.getElementById("field")
      field.innerHTML = `Your bet is: ${wager}`
      // }
      game.deal();
      
      document.getElementById("dealer")
      dealer.innerHTML = `Dealer is showing: ${game.getDealerCardUp()}`

      document.getElementById("player")
      player.innerHTML = `Your current hand: ${game.getUserHandValue()}`


      game.resetPlayers();
    }

  }