Player = require('../lib/Player')
 
module.exports = class Dealer extends Player {
    constructor(){
      super()
      this.name = 'Dealer';
      this.wallet = 9999;
      this.hands = [];
      this.bet = null;
      this.type = 'dealer';
    }
  }