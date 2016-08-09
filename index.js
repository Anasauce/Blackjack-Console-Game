const Deck = require('./lib/deck')
const game = require('./lib/game')
const Player = require('./lib/player')
const interface = require('./lib/interface')
const add = require('./lib/add')

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
  var player = new Player;
  var name = interface.ask('What is this player\'s name?')
  player.type = 'human'
  player.name = name
  gameOptions.humans.push(player)}

  var ai = interface.askForNumber('How many computer players do you want to create?')
  console.log('You have:'+' '+players+' computer players in this round')
   for (i = 0; i < ai; i++){ 
    var player = new Player
    player.type = 'AI'
    player.name = ('AI '+ (i+1))
    gameOptions.ai.push(player)
  }

var ourGame = new game
ourGame.players.push(gameOptions)
ourGame.decks.push(new Deck)


  console.log(ourGame)
  console.log(ourGame.decks)
