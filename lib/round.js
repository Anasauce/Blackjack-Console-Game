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
    this.settleBets()
  }

  askForBets(){
    var dealer = this.game.dealer
    var players = this.game.players

    this.hands.push(new Hand({
      player: dealer,
      type: 'dealer',
    }))

    players.forEach(player => {
      console.log(player.name+':')
      var bet = prompt.askForNumber('How much would you like to bet?')
      if (bet <= 0) return;
      this.hands.push(new Hand({
        player: player,
        bet: bet,
        type: 'human',
      }))
    })
  }
  dealCards(){
    this.dealACardPerHand()
    this.dealACardPerHand()
    // console.log(this)
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
        // if (action === 'split'){
        //   console.log('need this coded')
        // }
        // if (action === 'double'){
        //   console.log('need this coded')
        // }
        // if (action === 'insurance'){
        //   console.log('need this coded')
        // }
        // if (action === 'surrender'){
        //   console.log('need this coded')
        // }
        if (action === 'stand'){
          break
        }
      }
    })
  }
  settleBets(){
    var dealer = this.game.dealer
    var dealersHand = this.hands.find(hand => {
      return hand.player === dealer
    })
    console.log('dealer has '+ dealersHand)
    this.hands.forEach(hand => {
      if (hand === dealersHand) return
      // this is for winners
      if (!hand.isBust() && hand.value() > dealersHand.value()){
        console.log(hand.player.name+" won with "+hand)
      }
      // this is for losers
      else if (hand.isBust() || hand.value() < dealersHand.value()){
        console.log(hand.player.name+" lost with "+hand)
      }
      // this is for push
      else if (!hand.isBust() && hand.value() === dealersHand.value()){
        console.log(hand.player.name+" pushed with "+hand)
      }
      else { 
        throw new Error('WHOEHOWIOEJW')
      }
    })
  }

    //var humanHands = HumanPlayers.hands
    //console.log(HumanPlayers)
    // humanHands.forEach(hand => {
    //   var player = hand.player
    //   var bet = hand.bet
    //   if (hand.isNatural()){
    //     player.wallet.push(bet*1.5)
    //     console.log(player.wallet)
    //   }
    //   if (hand.wins()){
    //     player.wallet.push(bet)
    //     console.log(player.wallet)
    //   } 
    //   })


  evaluateHands(player){
    player.hands.forEach(hand => {
      console.log(this, hand)
    })
  }
}