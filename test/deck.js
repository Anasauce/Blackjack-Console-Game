const expect = require('expect')
const Deck = require('../lib/deck')

describe('Deck', function() {
  it('should give you a standard deck of playing cards', function() {
    const JACK     = 'J'
    const QUEEN    = 'Q'
    const KING     = 'K'
    const ACE      = 'A'
    const SPADES   = '♠️'
    const CLUBS    = '♣️'
    const HEARTS   = '❤️'
    const DIAMONDS = '♦️'
    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING, ACE];
    var suits = [SPADES, CLUBS, HEARTS, DIAMONDS];
    var deck = new Deck(ranks,suits)
    var numOfCards = deck.cards.length

    expect(numOfCards).toBe(52)
  });
});