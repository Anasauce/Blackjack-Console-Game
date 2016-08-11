const prompt = require('../lib/prompt') 
module.exports = class Player {
  constructor(options){
    this.name = options.name 
    this.type = options.type
    this.wallet = 500
    this.bet = null

  }

  actions(){
    while (response === undefined){
      var response = prompt(choiceOfAction)
      return response
    }
  } 
  ishuman(){
    return this.type === 'human'
    }
}  