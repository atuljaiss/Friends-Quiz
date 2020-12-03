var readlinesync = require("readline-sync");
const chalk = require('chalk');
console.log("********  WELCOME TO QUIZ ON "+"F"+chalk.red(".")+"R"+chalk.cyan(".")+'I'+chalk.green(".")+'E'+chalk.yellow(".")+'N'+chalk.red(".")+'S   ********')


var userName = readlinesync.question("Enter Your Name: ").toUpperCase()
console.log("Welcome "+ chalk.green(userName) + " Get Ready For The Quiz 1... 2.. 3.");


var questions = [
  {question : chalk.green("\nQ1. Which pairing never kissed on the show? \n\n1. Monica and Phoebe \n2. Rachel and Chandle \n3. Phoebe and Ross"),
  answer: '3',},
  {question :chalk.green("Q2. Which of Joey’s sisters did Chandler fool around with? \n\n1. Mary Therese \n2. Mary Angela \n3. Cookie"),
  answer : '2',},
  {question :chalk.green("Q3. What was the name of the orthodontist Rachel was meant to marry in the pilot episode?\n \n1. Barry \n2. Brad \n3. Bart"),
  answer : '1'},
  {question: chalk.green('Q4. What is the name of Joey’s stuffed penguin? \n\n1. Pugsy\n2. Birdsy\n3. Hugsy'),
  answer: '3',},
  {question: chalk.green("Q5. What's the title of the Friends theme song \n\n1. I'll Be There For Them\n2. I'll Be There For Those\n3. I'll Be There For You"),
  answer: '3',},
  {question: chalk.green("Q6. What's the name of the coffee shop used by the characters?\n\n1. St James' Perk\n2. Central Perk'\n3. Froth Of Khan"),
  answer: '2',},
  {question:chalk.green("Q7. What is Janice most likely to say?\n\n1. Talk to the hand\n2. Get me a coffee!\n3. Oh... my... God!"),
  answer:'3'},
  {question:chalk.green("Q8. What song is Phoebe best known for?\n\n1. Smelly Cat\n2. Smelly Dog\n3. Smelly Rabbit"),
  answer:'1',},
  {question: chalk.green("Q9. Which Friends character plays Dr. Drake Ramoray on the show Days Of Our Lives?\n\n1. Ross Geller\n2. Pete Becker\n3. Joey Tribbiani"),
  answer:'3',},
  {question: chalk.green("Q10. What job did Chandler do?\n\n1. Data processor \n2. Stand-up comedian\n3. Journalist"),
  answer:'1',},
  

]
var score = 0;
for (var i=0; i<questions.length; i++) {
  
  play(questions[i].question, questions[i].answer)
}

function sortHighscore(highScores)
{
  for(var i =0;i<highScores.length;i++){
    for(var j=i+1; j<highScores.length;j++){
      if(highScores[i].score < highScores[j].score){
        var temp= highScores[i];
        highScores[i]=highScores[j];
        highScores[j]=temp;
      }
    }
  }
   return highScores;
}



function play(question, answer) {
  var userAnswer = readlinesync.question(question + '\n');

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Your Answer is right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.red("Your Answer is wrong!")+"\n"+ "Correct Answer: "+chalk.green(answer));

   
  }

  console.log("current score: ", score);
  console.log("-------------")
}




console.log("YO! You SCORED: ", score);
console.log("Check out the scores");
var highScores = [
  {
    name: "Ankit",
    score: 1,
  },

  {
    name: "ATUL",
    score: 7,
  },
]
highScores.push({name : userName,score:score});
highScores= sortHighscore(highScores);


for(var i=0;i<highScores.length;i++)
{
  console.log(highScores[i])
}
if(highScores[0].name==userName){
console.log(chalk.green("Congratulation!! For The HighScore ")+chalk.green(userName));}
console.log(chalk.yellow("Please send screenshot of your score"));