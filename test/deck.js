const expect = require('expect')
const add = require('../lib/add')

describe('makeDeck', function() {
  it('should give you a standard deck of playing cards', function() {
    var ranks = 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A;
    var suits = SPADES, CLUBS, HEARTS, DIAMONDS;
    expect(deck.cards.length()).toBe(52)
  });
});