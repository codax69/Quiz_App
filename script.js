// make question and answer array✅
const Question = [
  {
    key: "1",
    question: "What is the capital of India?",
    answer: [
      {
        text: "New Delhi",
        correct: true,
      },
      {
        text: "Kolkata",
        correct: false,
      },
      {
        text: "Gujarat",
        correct: false,
      },
      {
        text: "Banglor",
        correct: false,
      },
    ],
  },
  {
    key: "2",
    question: "Which is the national animal of India?",
    answer: [
      {
        text: "Leopard",
        correct: false,
      },
      {
        text: "Lion",
        correct: false,
      },
      {
        text: "Puma",
        correct: false,
      },
      {
        text: "Tiger",
        correct: true,
      },
    ],
  },
  {
    key: "3",
    question: "Who is known as the Father of the Nation in India?",
    answer: [
      {
        text: "Jawaharlal Neharu",
        correct: false,
      },
      {
        text: "Mahatma Gandhi",
        correct: true,
      },
      {
        text: "Sardar Vallabhbhai Patel",
        correct: false,
      },
      {
        text: "Bhagat singh",
        correct: false,
      },
    ],
  },
  {
    key: "4",
    question: "What is the currency of India?",
    answer: [
      {
        text: "Euro",
        correct: false,
      },
      {
        text: "Indian Rupee",
        correct: true,
      },
      {
        text: "USD",
        correct: false,
      },
      {
        text: "Pound",
        correct: false,
      },
    ],
  },
  {
    key: "1",
    question: "What is the capital of India?",
    answer: [
      { text: "New Delhi", correct: true },
      { text: "Kolkata", correct: false },
      { text: "Gujarat", correct: false },
      { text: "Bangalore", correct: false },
    ],
  },
  {
    key: "2",
    question: "What is the capital of USA?",
    answer: [
      { text: "Washington D.C.", correct: true },
      { text: "New York", correct: false },
      { text: "Los Angeles", correct: false },
      { text: "Chicago", correct: false },
    ],
  },
  {
    key: "3",
    question: "What is the capital of Australia?",
    answer: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Perth", correct: false },
    ],
  },
  {
    key: "4",
    question: "What is the capital of Canada?",
    answer: [
      { text: "Toronto", correct: false },
      { text: "Vancouver", correct: false },
      { text: "Montreal", correct: false },
      { text: "Ottawa", correct: true },
    ],
  },
  {
    key: "5",
    question: "What is the capital of Japan?",
    answer: [
      { text: "Osaka", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Kyoto", correct: false },
      { text: "Hiroshima", correct: false },
    ],
  },
  {
    key: "6",
    question: "What is the capital of Germany?",
    answer: [
      { text: "Munich", correct: false },
      { text: "Frankfurt", correct: false },
      { text: "Hamburg", correct: false },
      { text: "Berlin", correct: true },
    ],
  },
  {
    key: "7",
    question: "What is the capital of France?",
    answer: [
      { text: "Lyon", correct: false },
      { text: "Paris", correct: true },
      { text: "Marseille", correct: false },
      { text: "Toulouse", correct: false },
    ],
  },
  {
    key: "8",
    question: "What is the capital of Italy?",
    answer: [
      { text: "Milan", correct: false },
      { text: "Naples", correct: false },
      { text: "Rome", correct: true },
      { text: "Turin", correct: false },
    ],
  },
  {
    key: "9",
    question: "What is the capital of Spain?",
    answer: [
      { text: "Madrid", correct: true },
      { text: "Barcelona", correct: false },
      { text: "Valencia", correct: false },
      { text: "Seville", correct: false },
    ],
  },
  {
    key: "10",
    question: "What is the capital of Brazil?",
    answer: [
      { text: "Rio de Janeiro", correct: false },
      { text: "Brasília", correct: true },
      { text: "São Paulo", correct: false },
      { text: "Salvador", correct: false },
    ],
  },
];

// Declare constants
const QuestionElem = document.getElementById("question");
const answerTab = document.getElementById("answer-tab");
const nextBtn = document.getElementById("next-btn");

let score = 0;
let currentQuestionIndex = 0;
console.log(currentQuestionIndex); 


const showQuestions = () => {
  resetState();
  let currentQuestion = Question[currentQuestionIndex];
  let questionNumber = currentQuestionIndex +1 ;
  QuestionElem.textContent = `${questionNumber}.${currentQuestion.question}`;
  
  let Answer = currentQuestion.answer; 
  Answer.forEach((Ans, index) => {
    let button = document.createElement("button");
    button.className =
    "border-[1px] h-8 border-gray-500 my-2 rounded-lg justify-start hover:bg-black hover:text-white hover:font-semibold";
    button.textContent = Ans.text;
    if (Ans.correct) {
      button.dataset.correct = Ans.correct;
    }
    answerTab.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
};

const startQuiz = () => {
  score = 0;
  currentQuestionIndex = 0;
  nextBtn.textContent = "Next";
  showQuestions();
};

// Write selectAnswer function
const selectAnswer = (e) => {
  selectBtn = e.target;
  console.log(selectBtn);
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("bg-green-500");
    score++;
  } else {
    selectBtn.classList.add("bg-red-500");
  }
  Array.from(answerTab.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("bg-green-500");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
};

nextBtn.addEventListener("click", () => {
  
  if (currentQuestionIndex < Question.length) {
    handleNext();
  } else {
    startQuiz();
  }
});

const handleNext = () => {
  currentQuestionIndex++
  if (currentQuestionIndex < Question.length) {
    showQuestions();
  } else {
    showScore();
  }
};

const showScore = () => {
  resetState()
  QuestionElem.textContent = `You scored ${score}/${Question.length}🎉`;
  nextBtn.textContent = "Play again!"; 
  nextBtn.style.display = "block";
};

const resetState = () => {
  nextBtn.style.display = "none";
  answerTab.innerHTML = "";
  while (answerTab.firstChild) {
    answerTab.removeChild(answerTab.firstChild);
  }
};

startQuiz();