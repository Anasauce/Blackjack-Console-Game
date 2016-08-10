const Deck = require ('../lib/deck')

class Game {
  constructor() {
    this.players = []
    this.dealer = []
    this.deck new Deck;
    this.round =[]
    this.dealer = []
  }
  start() {
  console.log('starting new game')
  }
}

module.exports = Game;