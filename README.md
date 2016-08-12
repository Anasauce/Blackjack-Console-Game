## Description

_Provide a brief, high-level overview of what the final product (artifact) of this goal is. Include any relevant resources or dependencies here._

## Context

_Why is this goal important? How is it useful? What questions will it raise?_

## Specifications

_List of specifications (specs) for the completed goal. These are declarative sentences (statements) describing some quality or behavior of the final product._

## Blackjack:

Dealer and Player characters Dealer Logic:
- [X] Dealer gives out cards in specific order
- [X] Dealer gives out:
- [X] one card face down to player
- [X] one card face down to Dealer
- [X] one card face up to player
- [X] one card face up to Dealer
- [X] shuffle the deck
- [X] Dealer plays, hitting while 16 or under (17 or more, dealer stays)
- [X] If dealer hits and busts, player wins
Player Logic:

- [ ] if player gets Blackjack right at the start (Natural), player wins

Repeat hit or stay until player chooses to stay:
- [X] Player chooses to hit or stay
- [X] if player goes over 21, player busts

Backend Game Logic:

- [X] Compare player total to dealer total, highest wins

- [X] If player wins, players get their bet back, doubled

Repeat until player chooses to stay:

- [X] Player chooses to hit or stay

- [X] If hits and bust (go over 21), automatically loses
- [X] if player gets Blackjack right at the start (Natural), player wins
- [X] Repeat hit or stay until player chooses to stay:
- [X] Player chooses to hit or stay
- [X] if player goes over 21, player busts
- [X] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

#Stretch Goals

Betting

- [X] Place a bet at the beginning of the hand.
- [ ] Handle bets for additional circumstances (double down, split, etc.)
- [X] Multiple players
- [X] Hot Seat Multiplayer
- [X] AI Players
- [ ] New Game Rules
- [ ] Double Down
- [ ] Split/Resplit
- [ ] Insurance
- [ ] Split your bet
- [ ] Double your bet
- [ ] Surrender

- [ ] buy jared a doughnut

---

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

[mit-license]: https://opensource.org/licenses/MIT
