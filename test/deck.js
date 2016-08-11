const expect = require('expect.js')
const Deck = require('../lib/deck')

describe('Deck', function() {
  it('should have 52 cards', function() {
    var deck = new Deck()
    expect(deck.cards.length).to.be(52)
  })
  it('should be shuffled', function() {
    var deck = new Deck()
    var newDeckOrder = 'A♠️2♠️3♠️4♠️5♠️6♠️7♠️8♠️9♠️10♠️J♠️Q♠️K♠️A♦️2♦️3♦️4♦️5♦️6♦️7♦️8♦️9♦️10♦️J♦️Q♦️K♦️A♣️2♣️3♣️4♣️5♣️6♣️7♣️8♣️9♣️10♣️J♣️Q♣️K♣️A❤️2❤️3❤️4❤️5❤️6❤️7❤️8❤️9❤️10❤️J❤️Q❤️K❤️'
    var deckOrder = deck.cards.map(card => card.toString()).join('')
    expect(deckOrder).to.not.equal(newDeckOrder)
  });

  describe('Deck', function() {
  it('should have 52 cards', function() {
    var deck = new Deck()
    expect(deck.cards.length).to.be(52)
  })
  it('should be shuffled', function() {
    var deck = new Deck()
    var newDeckOrder = 'A♠️2♠️3♠️4♠️5♠️6♠️7♠️8♠️9♠️10♠️J♠️Q♠️K♠️A♦️2♦️3♦️4♦️5♦️6♦️7♦️8♦️9♦️10♦️J♦️Q♦️K♦️A♣️2♣️3♣️4♣️5♣️6♣️7♣️8♣️9♣️10♣️J♣️Q♣️K♣️A❤️2❤️3❤️4❤️5❤️6❤️7❤️8❤️9❤️10❤️J❤️Q❤️K❤️'
    var deckOrder = deck.cards.map(card => card.toString()).join('')
    expect(deckOrder).to.not.equal(newDeckOrder)
  });


  describe('#takeOne', function(){
    it('should remove a card from the deck and return it', function(){
      var deck = new Deck
      expect(deck.cards.length).to.be(52)
      var card = deck.takeOne()
      expect(card).to.be.a(Deck.Card)
      expect(deck.cards.length).to.be(51)
    })
  })
  });
})
