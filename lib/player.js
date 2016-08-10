const prompt = require('../lib/interface') 
module.exports = {
Player: class Player {
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
},  

Dealer: class Dealer{
    constructor(){
      this.name = 'Dealer';
      this.wallet = 9999;
      this.hands = [];
      this.bet = null;
      this.type = 'dealer';
    }
  }
}