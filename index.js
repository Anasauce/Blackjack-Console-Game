const rl = require('readline-sync')
const add = require('./lib/add')

var firstnumber = parseInt(rl.question('whats the first number you want to add?'), 10)
var secondnumber = parseInt(rl.question('whats the second number you want to add?'), 10)

console.log(add(firstnumber, secondnumber))

