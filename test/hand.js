const expect = require('expect.js')
const Hand = require('../lib/Hand')
const Deck = require('../lib/Deck')
const Card = Deck.Card 

describe('Hand', function() {
  describe('#giveCard', function() {
    it('should put card in hand', function() {
      var hand = new Hand({})
      expect(hand.cards.length).to.be(0)
      var card = {rank: 3, suit: 'H'}
      hand.giveCard(card)
      expect(hand.cards.length).to.be(1)
      expect(hand.cards).to.contain(card)

    })
  })
  describe('#value', function() {
    it('should return the highest value of the cards that is < 22', function() {
      var hand = new Hand({})
      hand.cards = [
        new Card(Card.ACE,  Card.HEARTS),
        new Card(Card.KING, Card.DIAMONDS),
      ]
      expect(hand.value()).to.be(21)

      hand.cards = [
        new Card(Card.ACE,  Card.HEARTS),
        new Card(Card.ACE,  Card.HEARTS),
        new Card(Card.KING, Card.DIAMONDS),
      ]
      expect(hand.value()).to.be(12)

      hand.cards = [
        new Card(Card.ACE,  Card.HEARTS),
        new Card(Card.ACE,  Card.HEARTS),
        new Card(Card.ACE,  Card.HEARTS),
        new Card(Card.ACE,  Card.HEARTS),
        new Card(5,  Card.HEARTS),
      ]
      expect(hand.value()).to.be(19)
    })
  })
})
