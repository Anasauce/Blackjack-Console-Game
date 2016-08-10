const JACK     = 'J'
const QUEEN    = 'Q'
const KING     = 'K'
const ACE      = 'A'
const SPADES   = '♠️'
const CLUBS    = '♣️'
const HEARTS   = '❤️'
const DIAMONDS = '♦️'
const RANKS = [ACE, 2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING]
const SUITS = [SPADES, DIAMONDS, CLUBS, HEARTS]


class Card {
  constructor(rank,suit){
    this.rank = rank;
    this.suit = suit
    this.facingup = false
  }
  toString(){
    return `${this.rank}${this.suit}`
  }
}
  
var createDeck = function(){
  var s, r;
  var cards = []
  for (s = 0; s < SUITS.length; s++){
    for (r = 0; r < RANKS.length; r++){
      cards.push(new Card(RANKS[r],SUITS[s]))
    }
  }
  return cards
}

class Deck {
  constructor() {
    this.cards = createDeck()
    this.shuffle();
  }

  shuffle() {
    var i = 0
    , j = 0 
    , temp = null
   
    var maxIndex = this.cards.length - 1;
    for (i = maxIndex; i >= 0; i--) {
      j = Math.floor(Math.random() * maxIndex) + 1; 
      temp = this.cards[j];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  } 
}

Deck.Card = Card

module.exports = Deck