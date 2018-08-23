// // #1
// process.stdout.write('prompt > ');
//
// // #2
// process.stdin.on('data', (data) => {
//   // #3
//   const cmd = data.toString().trim();
//
//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });

const commands = require('./commands.js');

//prompt the user for input
process.stdout.write('prompt > ');

// The stdin 'data' event triggers after a user types in a line
process.stdin.on('data', (userInput) => {
  userInput = userInput.toString().trim();
  //evaluateCmd is a funciton which will be implemented in commands.js
  commands.evaluateCmd(userInput);
});
