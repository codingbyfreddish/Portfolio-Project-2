const quote = document.getElementById('quote');
const choicePerson = Array.from(document.getElementsByClassName('choice-person'));
const maxQuotes = 5;

let currentQuote = {};
let acceptingAnswers = false;
let quoteCounter = 0;
let availableQuotes = [];




// functions




runQuiz = () => {
  quoteCounter = 0;
  availableQuotes = [...quotes];
  getNewQuote();
};

getNewQuote = () => {
  if (availableQuotes.length === 0 || quoteCounter >= maxQuotes) {
    alert("Well done! You still suck in so many areas tho");  // REPLACE before deployment
  }
  quoteCounter++;
  const quoteRNG = Math.floor(Math.random() * availableQuotes.length);
  currentQuote = availableQuotes[quoteRNG];
  quote.innerText = currentQuote.quote;
  
  choicePerson.forEach(person => {
  const number = person.dataset['number'];
  person.innerText = currentQuote['person' + number];
  })
  
  availableQuotes.splice(quoteRNG, 1);
  acceptingAnswers = true;
};

choicePerson.forEach(person => {
  person.addEventListener('click', e => {
  if (!acceptingAnswers) return;
      
  acceptingAnswers = false;
  const selectedPerson = e.target;
  const selectedAnswer = selectedPerson.dataset['number'];
  console.log(selectedAnswer);

  const answerColor = selectedAnswer == currentQuote.answer ? 'correct' : 'incorrect';
  selectedPerson.classList.add(answerColor);

  if (answerColor === 'correct') {
    incrementScore();
  } else {incrementWrongAnswer()};

  setTimeout( () => {
  selectedPerson.classList.remove(answerColor);
  getNewQuote();
  }, 1000);

  });
});

incrementScore = () => {
  let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}


incrementWrongAnswer = () => {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
};


runQuiz();  
