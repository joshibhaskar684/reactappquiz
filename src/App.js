import React, { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const questions = [
  {
    question: "Which of the following is used to declare a constant in JavaScript?",
    options: ["let", "const", "var", "function"],
    answer: "const",
   
  },
  {
    question: " Which method in Python is used to add an item to the end of a list?",
    options: ["append", "insert", "extend", "remove"],
    answer: "append",
   
  },
  {
    question: "Which of the following is used to declare a variable in Python?",
    options: ["let", "const", "var", "x ="],
    answer: "x =",
  },
  {
    question: "In object-oriented programming, which of the following is used to create a new object?",
    options: ["class", "function", "constructor", "inheritance"],
    answer: "class",
   
  },
  {
    question: " Which loop is guaranteed to execute at least once in Java?",
    options: ["for", "while", "do-while", "switch"],
    answer: "do-while",
   
  },
  {
    question: "What is the result of undefined == null in JavaScript?",
    options: ["true", "false", "null", "undefined"],
    answer: "true",
   
  },
  {
    question: "Which function is used to read user input from the console in Python?",
    options: ["input", "print", "readline", "read"],
    answer: "input",
   
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<br>", "<p>", "<h1>", "<hr>"],
    answer: "<br>",
   
  },
  {
    question: "Which of the following is not a JavaScript primitive data type?",
    options: ["number", "string", "boolean", "object"],
    answer: "object",
   
  },
  {
    question: "What are the four main principles of Object-Oriented Programming (OOP)?",
    options: ["Encapsulation, Inheritance, Polymorphism, Abstraction", "Encapsulation, Inheritance, Abstraction, Polymorphism", "Encapsulation, Abstraction, Inheritance, Polymorphism", "Abstraction, Encapsulation, Inheritance, Polymorphism"],
    answer: "Encapsulation, Inheritance, Polymorphism, Abstraction",
   
  },
  {
    question: "Which of the following is the best data structure to implement a priority queue?",
    options: ["Stack", "Queue", "Linked List", "Heap"],
    answer: "Heap",
   
  },

  {
    question: "Which algorithm is used for finding the shortest path in a weighted graph?",
    options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Floyd-Warshall algorithm", "A* algorithm"],
      answer: "Dijkstra's algorithm",
   
  },
  {
    question: "Which data structure uses the Last In First Out (LIFO) principle?",
    options: ["Stack", "Queue", "Linked List", "Array"],
    answer: "Stack",
   
  },
  {
    question: "Which sorting algorithm is the fastest for large datasets, with a time complexity of O(n log n)?",
    options: ["Bubble sort", "Selection sort", "Insertion sort", "Merge sort"],
    answer: "Merge sort",

   
  },
  {
    question: "What keyword is used to inherit a class in Java?",
    options: ["extends", "implements", "interface", "super"],
    answer: "extends",
   
  },
  {
    question: "Which of the following is used to define a class in Java?",
    options: ["class", "interface", "enum", "abstract"],
    answer: "class",
   
  },
  {
    question: "Which of the following is a type of polymorphism in Java?",
    options: ["Method overloading", "Method overriding", "Method overwriting", "Method hiding"],
    answer: "Method overriding",
   
  },
  {
    question: "Which algorithm is used to sort an array in ascending order?",
    options: ["Bubble sort", "Selection sort", "Insertion sort", "Quick sort"],
    answer: "Quick sort",
   
  },
  {
    question: "Which data structure is used to implement recursion?",
    options: [" Stack", "Queue", "Array","Linked List"],
    answer: "Stack",

   
  },
  {
    question: "Which search algorithm works on a sorted array?",
    options: ["Linear search", "Binary search", "Depth-first search", "bubble sort"],
    answer: "Binary search",
   
  },
  {
    question: "Which of the following is not a type of linked list?",
    options: ["Singly linked list", "Doubly linked list", "Circular linked list", "Array"],
    answer: "Array",
   
  },
  {
    question: "Which sorting algorithm is based on the divide-and-conquer technique?",
    options: ["Bubble sort", "Selection sort", "Insertion sort", "Merge sort"],
    answer: "Merge sort",
   
  },
  {
    question: "Which of the following is a non-linear data structure?",
    options: ["Array", "Linked list", "Stack", "Queue"],
    answer: "Linked list",
   
  },
  {
    question: "Which method is used to render JSX in React?",
    options: ["render() method", "componentDidMount() method", "componentDidUpdate() method", "componentWillUnmount() method"],
    answer: "render() method",
   
  },
  {
    question: "In React, what is the term for a function that returns JSX and defines how the UI should look?",
    options: ["Component", "Class", "Function", "Hook"],
    answer: "Component",
   
  },
  {
    question: "What is the purpose of the useEffect hook in React?",
    options: ["To handle side effects", "To handle events", "To handle state changes","To handle props changes"],
    answer: "To handle side effects",
  },
  {
    question: "How do you pass data to a React component?",
    options: ["Using props", "Using state", "Using context", "Using a callback function"],
    answer: "Using props",
   
  },
  {
    question: "Which of the following is used for routing in React?",
    options: ["React Router", "React Navigation", "React Switch", "React Route"],
    answer: "React Router",
   
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "JavaScript", "Ruby"],
    answer: "JavaScript",
  },
  {
    question:"Which of the following is not a valid data type in JavaScript?",
    options: ["String", "Number", "Boolean", "Array"],
    answer: "Array",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [timeUp, setTimeUp] = useState(false);  // Track if the time is up
  const [timerKey, setTimerKey] = useState(0); // Unique key to reset the timer

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(""); // Reset selected option
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeUp(false); // Reset timeUp state when moving to the next question
      setTimerKey(prevKey => prevKey + 1); // Increment timer key to reset the Timer component
    } else {
      setShowScore(true);
    }
  };

  const handleTimeUp = () => {
    setTimeUp(true); // Notify when the timer ends
    setTimeout(handleNextQuestion, 500); // 500ms delay to allow timer to show 00
  };

  return (
    
    <div className="body">
      <Navbar/>
      
      <div className="container">

      
      <div  className="quiz-container">
      {showScore ? (
        <div className="score-section">
          Your correct answer is  {score} out of {questions.length}!
          <div className="score-board">{score*2}/{questions.length*2}</div>
        </div>
      ) :(
        <div className="question-section">
          <Timer
            key={timerKey}  // Key forces the timer component to reset on every question
            initialTime={30}
            onTimeUp={handleTimeUp}
          />
          <h2>
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={selectedOption === option ? "selected" : ""}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion} className="next-btn">
            Next
          </button>
        </div>
      )}
    </div></div>
    <Footer/>
    
    </div>
  );
}

export default App;



