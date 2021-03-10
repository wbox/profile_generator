const readline = require('readline');
const answersArray = [];

const questionsArray = [
  "What's your name? ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arrayPosition = 0;
let sizeOfArray = questionsArray.length -1;

const askQuestion = (pos,array,size) => {
  rl.question(array[pos], (answer) => {
    answersArray.push(answer);
    if (pos < size) {
      pos++;
    } else {
      rl.close();
      console.log(answersArray);
      return;
    };
    askQuestion(pos,array,size);
  });
};

askQuestion(arrayPosition, questionsArray, sizeOfArray);