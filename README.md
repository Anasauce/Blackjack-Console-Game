## Description

_Provide a brief, high-level overview of what the final product (artifact) of this goal is. Include any relevant resources or dependencies here._

## Context

_Why is this goal important? How is it useful? What questions will it raise?_

## Specifications

_List of specifications (specs) for the completed goal. These are declarative sentences (statements) describing some quality or behavior of the final product._

Blackjack:

Dealer and Player characters Dealer Logic:
- [ ]Dealer gives out cards in specific order
- [ ]Dealer gives out:
- [ ]one card face down to player
- [ ]one card face down to Dealer
- [ ]one card face up to player
- [ ]one card face up to Dealer
- [ ]shuffle the deck
- [ ]Dealer plays, hitting while 16 or under (17 or more, dealer stays)
- [ ]If dealer hits and busts, player wins
Player Logic:

- [ ]if player gets Blackjack right at the start (Natural), player wins

Repeat hit or stay until player chooses to stay:
- [ ]Player chooses to hit or stay
- [ ]if player goes over 21, player busts
Backend Game Logic:

- [ ]Compare player total to dealer total, highest wins

- [ ]If player wins, players get their bet back, doubled

Repeat until player chooses to stay:

- [ ] Player chooses to hit or stay

- [ ] If hits and bust (go over 21), automatically loses
- [ ] if player gets Blackjack right at the start (Natural), player wins
- [ ] Repeat hit or stay until player chooses to stay:
- [ ] Player chooses to hit or stay
- [ ] if player goes over 21, player busts

New Features/Stretch Goals

Betting

- [ ] Place a bet at the beginning of the hand.
- [ ] Handle bets for additional circumstances (double down, split, etc.)
- [ ] Multiple players
- [ ] Hot Seat Multiplayer
- [ ] AI Players
- [ ] New Game Rules
- [ ] Double Down
- [ ] Split/Resplit
- [ ] Insurance

- [ ] Multiple local players
- [ ] Multiple AI players
- [ ] AI Dealer
- [ ] Split your bet
- [ ] Double your bet
- [ ] Insurance
- [ ] Surrender
- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

---

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT
