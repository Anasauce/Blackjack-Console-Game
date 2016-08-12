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
    this.gatherCards()
    console.log(this.game.deck)
  }

  askForBets(){
    var dealer = this.game.dealer
    var players = this.game.players
    var deck = this.game.deck
    this.hands.push(new Hand({
      player: dealer,
      type: 'dealer',
    }))
    players.forEach(player => {
      if (player.type === 'human') {
        var bet = prompt.askForNumber(player.name+': How much would you like to bet?')
        if (bet <= 0) return;
        this.hands.push(new Hand({
          player: player,
          bet: bet,
          type: 'human'
        }))
      }   
      else {
        var bet = Math.round(Math.random() * (125 - 1) + 1);
        this.hands.push(new Hand({
          player: player,
          bet: bet, 
          type: 'AI'
        }))
      } 
    
    })
  }

  dealCards(){
    this.dealACardPerHand(false)
    this.dealACardPerHand(true)
    // console.log(this)
  }

  dealACardPerHand(facingup){
    this.hands.forEach(hand => {
      var card = this.game.deck.takeOne()
      card.facingup = facingup;
      hand.giveCard(card)
    })
  }

  printGameState(){
    this.hands.forEach(hand =>{
      if(hand.player.name !== 'Dealer'){
        if (hand.player.type === 'human'){
          console.log(hand.player.name+" has "+hand.show()+' with bet '+hand.bet)
        }
        else {
          console.log(hand.player.name+" has "+hand+' with bet '+hand.bet)
        }
      }
      else {
        console.log('Dealer is showing '+hand+"whoohooo");
        console.log(hand.cards)
      }
    })
  }

  takeActions(){

    this.hands.forEach( hand =>{

      while(!hand.isBust()){
        
        if (hand.player.name === 'Dealer'){
          while (hand.value() <= 16)  {
            var card = this.game.deck.takeOne()
            card.facingup = true;
            hand.giveCard(card)
          }
          if (hand.value() >= 17){
            return
          }
        }
            
        if (hand.player.type === 'human'){
          var action = prompt.ask(hand.player.name+':'+' Would you like to hit or stand?')
          if (action === 'hit'){
            var card = this.game.deck.takeOne()
            card.facingup = true;
            hand.giveCard(card)
          }
          if (action === 'stand'){
            break
          }
        } 
        else {
          while (hand.value() <= 16){
            var card = this.game.deck.takeOne()
            card.facingup = true;
            hand.giveCard(card)
          }
          if (hand.value() >= 17){
            return
          }
        }

      if(hand.isBust()) {
          console.log(hand.player.name+' is a rabbit from the TV show Arthur')
      }
    }
  })
  }

  settleBets(){
    var dealer = this.game.dealer
    var dealersHand = this.hands.find(hand => {
      return hand.player === dealer
    }) 
    console.log('dealer has '+ dealersHand.show())
    this.hands.forEach(hand => {
      if (hand === dealersHand) return
      // this is for winners
      if (!hand.isBust() && hand.value() > dealersHand.value()){
        console.log(hand.player.name+" won with "+hand.show())
        hand.player.wallet += hand.bet
      }
      // this is for losers
      else if (hand.isBust() || hand.value() < dealersHand.value()){
        console.log(hand.player.name+" lost with "+hand.show())
        hand.player.wallet -= hand.bet
      }
      // this is for push
      else if (!hand.isBust() && hand.value() === dealersHand.value()){
        console.log(hand.player.name+" pushed with "+hand.show())
      }
      else { 
        throw new Error('WHOEHOWIOEJW')
      }
    })
  }

gatherCards(){
  this.hands.forEach(hand =>{
    while (hand.cards.length >0){
    var deck = this.game.deck
    deck.cards.push(hand.cards.shift())
    }
  })
}

}