const JACK     = 'J'
const QUEEN    = 'Q'
const KING     = 'K'
const ACE      = 'A'
const SPADES   = '♠️'
const CLUBS    = '♣️'
const HEARTS   = '❤️'
const DIAMONDS = '♦️'
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING, ACE]
const suits = [SPADES, CLUBS, HEARTS, DIAMONDS]



class Card {
  constructor(rank,suit){
    this.rank = rank;
    this.suit = suit
  }
}
  
var createDeck = function(ranks,suits){
  var cards = []
  var rank = ranks
  var suit = suits
  for (s = 0; s < suit.length; s++){
    for (r = 0; r < rank.length; r++){
    cards.push(new Card(rank[r],suit[s]))
    }
  }
  return cards
}

class Deck {
  constructor(){
    this.cards = createDeck(ranks,suits)
  } 
}

Deck.Card = Card

module.exports = Deck