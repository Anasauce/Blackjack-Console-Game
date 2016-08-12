const expect = require('expect.js')
const Deck = require('../lib/Deck')
const Card = Deck.Card 

describe('Card', function() {

  describe('#forDisplay', function(){
    var card = new Card(10, Card.HEART)
    expect(card.facingup).to.be(false)
    expect(card.forDisplay()).to.equal(Card.HIDDEN_CARD)
    card.facingup = true
    expect(card.forDisplay()).to.equal('10'+Card.HEART)
  })
 
})
