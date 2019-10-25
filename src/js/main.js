import blackjack from "blackjack-dealer-logic";


export default () =>{
  const game =  blackjack.singleDeckGame;
  const result = blackjack.Result;
  let wager = 0;
  const playButton = document.getElementById("playButton");
  const hitButton = document.getElementById("hitButton");
  const standButton = document.getElementById("standButton");
  const doubleButton = document.getElementById("doubleButton");
  
  
  playButton.onclick = function(){

      document.getElementById("chips")
      chips.innerHTML = `Your current chip count is: ${game.getUserChips()}`

      setTimeout(function() { wager = window.prompt("Enter your bet:")
      
      game.receiveAnte(wager);
      
      document.getElementById("bet")
      bet.innerHTML = `Your bet is: ${wager}`}, 1500)
      
      game.deal();
      
      setTimeout(function(){ document.getElementById("dealer")
      dealer.innerHTML = `Dealer is showing: ${game.getDealerCardUp()}`
      
      document.getElementById("player")
      player.innerHTML = `Your current hand: ${game.getUserHandValue()}`
      
      
      document.getElementById("board")
      board.innerHTML = `What would you like to do?`}, 5000)
      
        hitButton.onclick = function() {
          game.hitUser();
          game.evaluateUser();
          const card2 = document.getElementById("card2")
          card2.innerHTML = `Your current hand: ${game.getUserHandValue()}`
  
          game.settleDealerHand();

          const dealFull = document.getElementById("dealFull");
          dealFull.innerHTML = `Dealer has: ${game.getDealerHandValue()}`
          switch(game.outcome()) {
            case result.LOSS:
              const result1 = document.getElementById("result")
              result1.innerHTML = "You lost...";
              game.resetAnte()
              game.resetPlayers();

              break;

            case result.PUSH:
              const result2 = document.getElementById("result")
              result2.innerHTML = "Push...you get your money back";
              game.pushHand();
              game.resetPlayers();
              break;

            case result.WIN:
              const result3 = document.getElementById("result")
              result3.innerHTML = "Congrats! You Won!";
              game.userWin();
              game.resetPlayers();
              break;

            default:
              break;
          }
        }
    
        standButton.onclick = function() {
          game.standUser();
          game.evaluateUser();
          const card3 = document.getElementById("card3")
          card3.innerHTML = `Your current hand: ${game.getUserHandValue()}`

          game.settleDealerHand();

          const dealFull = document.getElementById("dealFull");
          dealFull.innerHTML = `Dealer has: ${game.getDealerHandValue()}`
          switch(game.outcome()) {
            case result.LOSS:
              const result1 = document.getElementById("result")
              result1.innerHTML = "You lost...";
              game.resetAnte();
              game.resetPlayers();
              break;

            case result.PUSH:
              const result2 = document.getElementById("result")
              result2.innerHTML = "Push...you get your money back";
              game.pushHand();
              game.resetPlayers();
              break;

            case result.WIN:
              const result3 = document.getElementById("result")
              result3.innerHTML = "Congrats! You Won!";
              game.userWin();
              game.resetPlayers();
              
              break;

            default:
              break;
          }

        }

        doubleButton.onclick = function(){
          game.doubleUser(2 * wager);
          game.evaluateUser();
          const dblwager = document.getElementById("dblwager");
          dblwager.innerHTML = `Your wager is: ${wager}`
        }

    }
    game.resetPlayers();
  }
