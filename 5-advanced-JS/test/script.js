

(function () {

  var questionProto = {
    printQuestion: function() {
      console.log(this.question);
      for (var i = 0; i < this.answers.length; i++ ) {
        console.log(i + ': ' + this.answers[i]);
      }
    }
  };
  
  var questionOne = Object.create(questionProto);
  
  questionOne.question = 'Whats the name of my boss';
  questionOne.answers = ['john', 'jane', 'justin'];
  questionOne.correctAnswer = 2;
  
  var questionTwo = Object.create(questionProto);
  questionTwo.question = 'Whats the name of my beer';
  questionTwo.answers = ['carling', 'hop house 13', 'fosters'];
  questionTwo.correctAnswer = 1;
  
  questions = [questionOne, questionTwo];

  askingQuestions = true;
  function askQuextion() {
    if (askingQuestions) {
      var randomQuestion = Math.floor(Math.random() * questions.length);
      questions[randomQuestion].printQuestion();
      console.log(questions[randomQuestion].question);
      var askQuestion = prompt(questions[randomQuestion].question);
      if (askQuestion === 'exit') {
        askingQuestions = false;
      } else if (askQuestion == questions[randomQuestion].correctAnswer ) {
        console.log("you answered: " + askQuestion + " which is CORRECT!" );
      } else {
        console.log("you are wrong" );
      }
      askQuextion();
    }

  }
  askQuextion();


  
})();
