
const Deck = require ('./deck')
const prompt = require('./prompt')
const Player = require('./Player')
const Dealer = require('./Dealer')
const Round = require('./Round')

class Game {
  constructor() {
    this.roundCount = 1;
    this.players = []
    this.setup()
    this.start()
  }
  setup() {
    var numberOfHumanPlayers = prompt.askForNumber('How many human players do you want to create?')
    console.log('You have:'+' '+numberOfHumanPlayers+' human players in this round')
    var i = 0
    for (i = 0; i < numberOfHumanPlayers; i++){
      var name = prompt.ask(': What\'s your name, player?')
      console.log('Player '+(i + 1))
      this.players.push(new Player({
        type: 'human',
        name: name
      }));
    }

    var numberOfAiPlayers = prompt.askForNumber('How many computer players do you want to create?')
    console.log('You have:'+' '+numberOfAiPlayers+' computer players in this round')
    for (i = 0; i < numberOfAiPlayers; i++){ 
      this.players.push( new Player({
        type: 'AI',
        name: ('AI '+ (i+1))
      }))
    }
    this.dealer = new Dealer();
    this.deck = new Deck(this.players.length);
  }
  start(){
    while (true){
      this.round = new Round({
        index: this.roundCount++,
        game: this
      });
      // TODO: ask to play again? if no then break;
    }
  }
}

module.exports = Game;