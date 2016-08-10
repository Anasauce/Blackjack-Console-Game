module.exports = class Round {
  constructor(options){
    this.index = options.index
    this.game = options.game
    this.start()
  }
  start(){
    console.log('Starting round #'+this.index)
    this.game.players
    this.game.deck

  }
}