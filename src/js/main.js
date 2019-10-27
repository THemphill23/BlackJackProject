import blackjack from "blackjack-dealer-logic";
import { areRangesOverlapping } from "date-fns";


export default () =>{
  const game =  blackjack.singleDeckGame;
  const result = blackjack.Result;
  let wager = 0;
  const nameButton = document.getElementById("nameButton")
  const playButton = document.getElementById("playButton");
  const hitButton = document.getElementById("hitButton");
  const standButton = document.getElementById("standButton");
  const doubleButton = document.getElementById("doubleButton");
  const userName = document.getElementById("userName")
  const card2 = document.getElementById("card2");
  const dealFull = document.getElementById("dealFull");
  const result1 = document.getElementById("result");
  const result2 = document.getElementById("result");
  const result3 = document.getElementById("result");
  const dblwager = document.getElementById("dblwager");
  const card3 = document.getElementById("card3");
  const chips = document.getElementById("chips");
  const bet = document.getElementById("bet");
  const dealer = document.getElementById("dealer");
  const player = document.getElementById("player");
  const board = document.getElementById("board");
  const again = document.getElementById("again");
  var gameHistory = []
  const history = document.getElementById("history");
  history.innerHTML = gameHistory;

  playButton.onclick = function(){
    card2.innerHTML =``;
    dealFull.innerHTML =``;
    result1.innerHTML =``;
    result2.innerHTML =``;
    result3.innerHTML =``;
    dblwager.innerHTML =``;
    card3.innerHTML =``;
    chips.innerHTML = ``;
    bet.innerHTML = ``;
    dealer.innerHTML = ``;
    player.innerHTML = ``;
    board.innerHTML = ``;
    again.innerHTML = ``;
    
      chips.innerHTML = `Your current chip count is: ${game.getUserChips()}`

      setTimeout(function() { wager = window.prompt("Enter your bet:")
      
      game.receiveAnte(wager);
      
      bet.innerHTML = `Your bet is: ${wager}`}, 1500)
      
      game.deal();
      
      setTimeout(function(){ 
      dealer.innerHTML = `Dealer is showing: ${game.getDealerCardUp()}`
      
      player.innerHTML = `Your current hand: ${game.getUserHandValue()}`
      
      
      document.getElementById("board")
      board.innerHTML = `What would you like to do?`}, 5000)
      
        hitButton.onclick = function() {
          game.hitUser();
          game.evaluateUser();
          card2.innerHTML = `Your current hand: ${game.getUserHandValue()}`
  
          game.settleDealerHand();

          dealFull.innerHTML = `Dealer has: ${game.getDealerHandValue()}`
          switch(game.outcome()) {
            case result.LOSS:
              result1.innerHTML = "You lost...";
              game.resetAnte()
              game.resetPlayers();
              gameHistory.push("lost");
              again.innerHTML = "Press Play to Deal Again."
              break;

            case result.PUSH:
              result2.innerHTML = "Push...you get your money back";
              game.pushHand();
              game.resetPlayers();
              gameHistory.push("push");
              again.innerHTML = "Press Play to Deal Again."
              break;

            case result.WIN:
              result3.innerHTML = "Congrats! You Won!";
              game.userWin();
              game.resetPlayers();
              gameHistory.push("win");
              again.innerHTML = "Press Play to Deal Again."
              break;

            default:
              break;
          }
          game.resetPlayers();
        };
    
        standButton.onclick = function() {
          game.standUser();
          game.evaluateUser();
          card3.innerHTML = `Your current hand: ${game.getUserHandValue()}`

          game.settleDealerHand();

          dealFull.innerHTML = `Dealer has: ${game.getDealerHandValue()}`
          switch(game.outcome()) {
            case result.LOSS:
              result1.innerHTML = "You lost...";
              game.resetAnte();
              game.resetPlayers();
              gameHistory.push("lost");
              again.innerHTML = "Press Play to Deal Again."
              break;

            case result.PUSH:
              result2.innerHTML = "Push...you get your money back";
              game.pushHand();
              game.resetPlayers();
              gameHistory.push("push");
              again.innerHTML = "Press Play to Deal Again."
              break;

            case result.WIN:
              result3.innerHTML = "Congrats! You Won!";
              game.userWin();
              game.resetPlayers();
              gameHistory.push("win");
              again.innerHTML = "Press Play to Deal Again."
              break;

            default:
              break;
          }
          game.resetPlayers();
        };

        doubleButton.onclick = function(){
          game.doubleUser();
          game.evaluateUser();
          dblwager.innerHTML = `Your bet is: ${game.getAnte()}`

          game.settleDealerHand();

          dealFull.innerHTML = `Dealer has: ${game.getDealerHandValue()}`
          switch(game.outcome()) {
            case result.LOSS:
              result1.innerHTML = "You lost...";
              game.resetAnte();
              game.resetPlayers();
              gameHistory.push("lost");
              again.innerHTML = "Press Play to Deal Again."
              break;

            case result.PUSH:
              result2.innerHTML = "Push...you get your money back";
              game.pushHand();
              game.resetPlayers();
              gameHistory.push("push");
              again.innerHTML = "Press Play to Deal Again."
              break;

            case result.WIN:
              result3.innerHTML = "Congrats! You Won!";
              game.userWin();
              game.resetPlayers();
              gameHistory.push("win");
              again.innerHTML = "Press Play to Deal Again."
              break;

            default:
              break;
          }
          game.resetPlayers();

        };
    }
  }
