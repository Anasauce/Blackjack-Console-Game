
const Deck = require ('../lib/deck')

class Game {
  constructor() {
    this.roundCount = 0;
    this.players = []
    this.setup()
    this.start()
  }
  setup() {
    var numberOfHumanPlayers = prompt.askForNumber('How many human players do you want to create?')
    console.log('You have:'+' '+numberOfHumanPlayers+' human players in this round')
    var i = 0
    for (i = 0; i < numberOfHumanPlayers; i++){
      var player = new Player;
      console.log('Player '+(i + 1))
      var name = prompt.ask(': What\'s your name, player?')
      player.type = 'human'
      player.name = name
      this.players.push(player)
    }

    var numberOfAiPlayers = prompt.askForNumber('How many computer players do you want to create?')
    console.log('You have:'+' '+numberOfAiPlayers+' computer players in this round')
    for (i = 0; i < numberOfAiPlayers; i++){ 
      var player = new Player
      player.type = 'AI'
      player.name = ('AI '+ (i+1))
      this.players.push(player)
    }
    this.dealer = new Dealer;
    this.deck = new Deck
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