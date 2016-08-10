const Deck = require('./lib/deck')
const game = require('./lib/game')
const Player = require('./lib/player')
const interface = require('./lib/interface')
const Round = require('./lib/round')

// Introduce Blackjack
console.log('Welcome Pocket Aces BlackJack! Created by Ana, Jared and John')
console.log('Basic rules: Play against the dealer with the goal of getting a hand with a value of 21')
console.log('Face cards are worth 10pts other cards are worth their face value. Aces are either 1 or 11')
console.log('Dealer deals 1 card face up and one face down to each player starting at his left to begin')

var gameOptions = {
  humans: [],
  ai: [],

}

var players = interface.askForNumber('How many human players do you want to create?')
 console.log('You have:'+' '+players+' human players in this round')
 for (i = 0; i < players; i++){
  var player = new Player.Player;
  console.log('Player '+(i + 1))
  var name = interface.ask(': What\'s your name, player?')
  player.type = 'human'
  player.name = name
  gameOptions.humans.push(player)}

  var ai = interface.askForNumber('How many computer players do you want to create?')
  console.log('You have:'+' '+players+' computer players in this round')
   for (i = 0; i < ai; i++){ 
    var player = new Player.Player
    player.type = 'AI'
    player.name = ('AI '+ (i+1))
    gameOptions.ai.push(player)
  }

var ourGame = new game;
var deck = ourGame.decks;
ourGame.players.push(gameOptions);
deck.push(new Deck);
console.log(ourGame.decks[0])
var dealer = new Player.Dealer;
ourGame.dealer.push(dealer);


ourGame.round.push(new Round.Round(ourGame));

  console.log(ourGame)
  console.log(ourGame.decks[0])
