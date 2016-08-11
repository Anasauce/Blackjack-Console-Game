const prompt = require('../lib/prompt') 
module.exports = class Player {
  constructor(name, wallet, hand, bet, type){
    this.name = [] 
    this.wallet = 500
    this.hands = []
    this.bet = []
    this.type = []
  }

  actions(){
    while (response === undefined){
      var response = prompt(choiceOfAction)
      return response
    }
  } 
}  