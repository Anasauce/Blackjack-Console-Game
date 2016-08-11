module.exports = class Player {
  constructor(options){
    this.name = options.name 
    this.type = options.type
    this.wallet = 500
    this.bet = null
  }

  ishuman(){
    return this.type === 'human'
  }
}  