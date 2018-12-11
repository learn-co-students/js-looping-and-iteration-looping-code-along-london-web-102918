function printBadges(employees) {
  for (let count = 0; count < employees.length; count++){
  console.log(`Welcome ${employees[count]}! You are employee #${count + 1}.`);
  }
  return employees;
};

function tailsNeverFails() {
  let tally = 0;
  while (Math.random() >= 0.5) {
    tally++
  }
  return `You got ${tally} tails in a row!`;
};
