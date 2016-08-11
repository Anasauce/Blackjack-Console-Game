const prompt = require('./prompt')
const Hand = require('./Hand')
module.exports = class Round {
  constructor(options){
    this.index = options.index
    this.game = options.game
    this.hands = []
    console.log('Starting round #'+this.index)
    this.askForBets()
    this.dealCards()
    this.printGameState()
    this.takeActions()
  }

  askForBets(){

    var players = this.game.players
    var deck = this.game.deck
    players.forEach(player => {
      var bet = prompt.askForNumber('How much would you like to bet?')
      if (bet <= 0) return;
      this.hands.push(new Hand({
        player: player,
        bet: bet
      }))
    })
  }
  dealCards(){
    this.dealACardPerHand()
    this.dealACardPerHand()
    console.log(this)
  }

  dealACardPerHand(){
    this.hands.forEach(hand => {
      hand.giveCard(this.game.deck.takeOne())
    })
  }

  printGameState(){
    this.hands.forEach(hand =>{
      console.log(hand.player.name+" has "+hand+' with bet '+hand.bet)
    })
  }

  takeActions(){
    this.hands.forEach(hand =>{
      while(!hand.isBust()){
        var action = prompt.ask('Would you like to hit or stand?')
        if (action === 'hit'){
          hand.giveCard(this.game.deck.takeOne())
        }
        if (action === 'stand'){
          break
        }
      }
    })
  }
}