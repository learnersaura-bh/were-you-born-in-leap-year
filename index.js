var readlineSync = require('readline-sync')


var userName = readlineSync.question("Enter Your Name? ")

console.log("hello " + userName)
var userDob = Number(readlineSync.question("Enter Your Birth Year or any year to check if it is leap year or not "));

if (userDob % 4 === 0) {
  console.log(" you were born in leap year")
}
else {
  console.log("you have born, that's enough, born in leap year sucks afterall")
}