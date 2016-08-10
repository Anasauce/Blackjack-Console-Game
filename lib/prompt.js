const rl = require('readline-sync')
const chalk = require('chalk')

module.exports = {
  ask: function(question){
    return rl.question(chalk.underline.bgBlue('🂠🂱 >> '+question)+' ')
  },
  askForNumber: function(question){
    return parseInt(this.ask(question), 10) 
  }
}

// // -- OR

// var interface = {
//   ask: function(question){
//     return rl.question(chalk.underline.bgBlue('🂠🂱 >> '+question)+' ')
//   },
//   askForNumber: function(question){
//     return parseInt(this.ask(question), 10) 
//   }
// }
// module.exports = interface;

// // -- OR

// var interface = {}

// interface.ask = function(question){
//   return rl.question(chalk.underline.bgBlue('🂠🂱 >> '+question)+' ')
// };

// interface.askForNumber = function(question){
//   return parseInt(interface.ask(question), 10) 
// };

// module.exports = interface;

