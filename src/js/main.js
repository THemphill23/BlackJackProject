import blackjack from "blackjack-dealer-logic";


export default () =>{
  const game =  blackjack.singleDeckGame;
  const gameIsRunning = true;
  const playButton = document.getElementById("playButton");
  const hitButton = document.getElementById("hitButton")

  playButton.onclick = function(){
    // while (gameIsRunning){
      // alert("Let' Play BlackJack!" + game.getUserChips())

      document.getElementById("chips")
      chips.innerHTML = `Your current chip count is: ${game.getUserChips()}`

      const wager = window.prompt("Enter your bet:")
        
      game.receiveAnte(wager);
        
      document.getElementById("bet")
      bet.innerHTML = `Your bet is: ${wager}`
      game.deal();
      
      document.getElementById("dealer")
      dealer.innerHTML = `Dealer is showing: ${game.getDealerCardUp()}`

      document.getElementById("player")
      player.innerHTML = `Your current hand: ${game.getUserHandValue()}`

      document.getElementById("board")
      board.innerHTML = `What would you like to do?`

      const userAction = window.prompt("1:HIT   2:STAND   3:DOUBLE")
        switch(userAction){
          case "1":
          break;

          case "2":
            break;


          case "3":
            break;

          default:
            break;
        }
        

      // game.resetPlayers();
    }
    
    // hitButton.onclick = fucntion(){
    //     game.hitUser()
    // }
  }