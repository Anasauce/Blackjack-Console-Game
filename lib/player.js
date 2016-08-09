const prompt = require('./lib/interface') 
class Player {
    constructor(){
    this.wallet = 500
    this.hand = []
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

module.exports = Player