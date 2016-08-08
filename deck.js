const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A]
const suits = [SPADES, CLUBS, HEARTS, DIAMONDS]

class Card {
    constructor(rank,suit){
    this.rank = rank;
    this.suit = suit
    }
}

class Deck {
  constructor(ranks,suits){
    var cards = []
    for (s = 0; s < suits; s++){
      for (r = 0; r < ranks; r++){
        cards.push(new Card(rank,suit))
      } 
    }
  }
}  

testdeck = new Deck(suits,ranks)
console.log(testdeck)