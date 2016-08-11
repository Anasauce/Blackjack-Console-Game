const expect = require('expect.js')
const Deck = require('../lib/deck')

describe('Deck', function() {
  it('should have 52 cards', function() {
    var deck = new Deck(1)
    expect(deck.cards.length).to.be(52)
  })
  it('should be shuffled', function() {
    var deck = new Deck(2)
    var newDeckOrder = 'A♠️2♠️3♠️4♠️5♠️6♠️7♠️8♠️9♠️10♠️J♠️Q♠️K♠️A♦️2♦️3♦️4♦️5♦️6♦️7♦️8♦️9♦️10♦️J♦️Q♦️K♦️A♣️2♣️3♣️4♣️5♣️6♣️7♣️8♣️9♣️10♣️J♣️Q♣️K♣️A❤️2❤️3❤️4❤️5❤️6❤️7❤️8❤️9❤️10❤️J❤️Q❤️K❤️'
    var deckOrder = deck.cards.map(card => card.toString()).join('')
    expect(deckOrder).to.not.equal(newDeckOrder)
  });

  describe('#takeOne', function(){
    it('should remove a card from the deck and return it', function(){
      var deck = new Deck(2)
      expect(deck.cards.length).to.be(52)
      var card = deck.takeOne()
      expect(card).to.be.a(Deck.Card)
      expect(deck.cards.length).to.be(51)
    })
  })

  it('should have 52 cards per 2 players', function() {
    var deck = new Deck(1)
    expect(deck.cards.length).to.be(52)
    var deck = new Deck(3)
    expect(deck.cards.length).to.be(104)
    var deck = new Deck(4)
    expect(deck.cards.length).to.be(104)
    var deck = new Deck(5)
    expect(deck.cards.length).to.be(156)
    var deck = new Deck(6)
    expect(deck.cards.length).to.be(156)
    var deck = new Deck(8)
    expect(deck.cards.length).to.be(208)
  }) 
})
