// globals (contains code from Code Geek)

const quote = document.getElementById('quote');
const choicePerson = Array.from(document.getElementsByClassName('choice-person'));
const maxQuotes = 5;
const modal = document.querySelector('#modal');

let currentQuote = {};
let acceptingAnswers = false;
let quoteCounter = 0;
let availableQuotes = [];

// all 20 quotes (quotes from the-philosophy.com)

let quotes = [ 
  {
      quote: '"I know that I know nothing"',
      person1: "Socrates",
      person2: "Nietzsche",
      person3: "Schopenhauer",
      person4: "Plato",
      answer: 1,
  },
  {
      quote: '"The true sign of intelligence is not knowledge but imagination"',
      person1: "Voltaire",
      person2: "Nietzsche",
      person3: "Einstein",
      person4: "Socrates",
      answer: 3,
  },
  {
      quote: '"Become what you are"',
      person1: "Schopenhauer",
      person2: "Nietzsche",
      person3: "Plato",
      person4: "Voltaire",
      answer: 2,
  },
  {
      quote: '"God is dead"',
      person1: "Einstein",
      person2: "Schopenhauer",
      person3: "Plato",
      person4: "Nietzsche",
      answer: 4,
  },
  {
      quote: '"Man is a bridge, not an end"',
      person1: "Hobbes",
      person2: "Nietzsche",
      person3: "Voltaire",
      person4: "Socrates",
      answer: 2,
  },
  {
      quote: '"Man is the measure of all things"',
      person1: "Plato",
      person2: "Nietzsche",
      person3: "Hobbes",
      person4: "Einstein",
      answer: 1,
  },
  {
      quote: '"If God does not exist, we would have to invent him"',
      person1: "Plato",
      person2: "Nietzsche",
      person3: "Voltaire",
      person4: "Heidegger",
      answer: 3,
  },
  {
      quote: '"Man is not an empire within an empire"',
      person1: "Leibniz",
      person2: "Spinoza",
      person3: "Hobbes",
      person4: "Socrates",
      answer: 2,
  },
  {
      quote: '"Man\'s knowledge can not extend beyond his own experience"',
      person1: "Nietzsche",
      person2: "Heidegger",
      person3: "Einstein",
      person4: "Locke",
      answer:  4,
  },
  {
      quote: '"The philosophers have only interpreted the world, we now have to transform it"',
      person1: "Epicurus",
      person2: "Heidegger",
      person3: "Marx",
      person4: "Hobbes",
      answer: 3,
  },
  {
      quote: '"Man is a wolf to man"',
      person1: "Hobbes",
      person2: "Schopenhauer",
      person3: "Pascal",
      person4: "Epicurus",
      answer: 1,
  },
  {
      quote: '"Death is nothing to us"',
      person1: "Schopenhauer",
      person2: "Socrates",
      person3: "Epicurus",
      person4: "Nietzsche",
      answer: 3,
  },
  {
      quote: '"If you are not Socrates, you have to live as if you wanted to be Socrates"',
      person1: "Plato",
      person2: "Socrates",
      person3: "Nietzsche",
      person4: "Epicurus",
      answer:  4,
  },
  {
      quote: '"Man is condemned to be free"',
      person1: "Marx",
      person2: "Sartre",
      person3: "Leibniz",
      person4: "Plato",
      answer: 2,
  },
  {
      quote: '"Man is but a reed, the weakest reed, but a thinking reed"',
      person1: "Schopenhauer",
      person2: "Leibniz",
      person3: "Pascal",
      person4: "Plato",
      answer: 3,
  },
  {
      quote: '"Why does there is something rather than nothing?"',
      person1: "Leibniz",
      person2: "Plato",
      person3: "Pascal",
      person4: "Heidegger",
      answer:  1,
  },
  {
      quote: '"All is not politics, but politics is interested in everything"',
      person1: "Marx",
      person2: "Heidegger",
      person3: "Machiavelli",
      person4: "Nietzsche",
      answer: 3,
  },
  {
      quote: '"The man is a metaphysical animal"',
      person1: "Leibniz",
      person2: "Plato",
      person3: "Sartre",
      person4: "Schopenhauer",
      answer: 4,
  },
  {
      quote: '"Do not expect that events happen as you wish; will what happens and you will be happy"',
      person1: "Leibniz",
      person2: "Epictetus",
      person3: "Plato",
      person4: "Sartre",
      answer:  2,
  },
  {
      quote: '"Dasein is a being towards death"',
      person1: "Schopenhauer",
      person2: "Marx",
      person3: "Heidegger",
      person4: "Nietzsche",
      answer: 3,
  },
];

// functions (contains code from Code Geek)

runQuiz = () => {
  quoteCounter = 0;
  availableQuotes = [...quotes];
  getNewQuote();
};

// get new quote (contains code from Code Geek)

getNewQuote = () => {
  if (availableQuotes.length === 0 || quoteCounter >= maxQuotes) {
    modal.showModal(); 
  }
  quoteCounter++;
  const quoteRNG = Math.floor(Math.random() * availableQuotes.length);
  currentQuote = availableQuotes[quoteRNG];
  quote.innerText = currentQuote.quote;
  
  choicePerson.forEach(person => {
  const number = person.dataset['number'];
  person.innerText = currentQuote['person' + number];
  });
  
  availableQuotes.splice(quoteRNG, 1);
  acceptingAnswers = true;
};

// choices (contains code from Code Geek, code institute; love maths project)

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
  } else {incrementWrongAnswer();}

  setTimeout( () => {
  selectedPerson.classList.remove(answerColor);
  getNewQuote();
  generate();
  }, 1000);

  });
});

// score (code from code institute; love maths project)

incrementScore = () => {
  let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
};


incrementWrongAnswer = () => {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
};

runQuiz();

// gradient liner generator (contains code from codepen.io)

createHex = () => {
  let hexCode1 = "";
  let hexValues1 = "0123456789abcdef";
    
  for ( let i = 0; i < 6; i++ ) {
  hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
}
  return hexCode1;
};
  
generate = () => {
  let deg = Math.floor(Math.random() *360);
  let gradient = "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() +")";
    
  document.getElementById("output-color").style.background = gradient;
  console.log(hexCode1, hexCode2);
};
  document.onload = generate();