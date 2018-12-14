// Code your solutions in this file
const name = ['Ada', 'Brendan', 'Ali']

function printBadges(name) {
  for (let i = 0; i < name.length; i++) {
  console.log(`Welcome ${name[i]}! You are employee #${i+1}.`)
}
return name
}

function tailsNeverFails() {
let countTails = 0;
while (Math.random() >= 0.5) {
countTails++;
}
return `You got ${countTails} tails in a row!`
}
