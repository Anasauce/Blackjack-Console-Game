module.exports = class Hand {
  constructor(options){
    this.cards = []; 
    this.player = options.player
    this.bet = options.bet
  }
  giveCard(card){
    this.cards.push(card)
    return this
  }

  toString(){
    return this.cards.map(card => card.forDisplay()).join(' ')
  }

  value(){
    var value = 0
    var numberOfAcesCountedAsEleven = this.cards.filter(card => card.isAce()).length

    this.cards.forEach(card =>{
      value += card.value
    })
    while (value > 21 && numberOfAcesCountedAsEleven > 0){
      value -= 10;
      numberOfAcesCountedAsEleven--;
    }
    return value;
  }

  isBust(){
    return this.value() > 21;
  }

  show(){
    return this.cards.map(card => card.toString()).join(' ')
  }

  isNatural(){
    return this.cards.length() === 2 && this.value === 21;
  }
}