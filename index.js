// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali'];

function printBadges(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
    }

    return names;
}


// function flip() {
//   return Math.random()
// }

function  outcome(){
  if (Math.random() >= 0.5){
  return  'Tails';
  }
  else {
  return  'Heads';
  }
}

function tailsNeverFails() {
  let counter = 0
  while (outcome() === 'Tails'){
    outcome();
    counter++;
  }
  return `You got ${counter} tails in a row!`
}


function tailsNeverFails(){
  let count = 0
  while (Math.random() >= 0.5){
    count++;
  }
  return `You got ${count} tails in a row!`
}
