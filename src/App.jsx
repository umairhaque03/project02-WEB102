import "./App.css";
import { useState } from "react";
const App = () => {
  const [flashcards, setFlashcards] = useState([
    {
      question: "What is the real name of Iron Man?",
      answer: "Tony Stark",
    },
    {
      question: "Who created Iron Man?",
      answer: "Stan Lee, Larry Lieber, Don Heck, and Jack Kirby",
    },
    {
      question: "What is the name of Iron Man's archenemy?",
      answer: "The Mandarin",
    },
    {
      question:
        "What is the name of the computer system that helps Tony Stark operate his suit?",
      answer: "JARVIS (Just A Rather Very Intelligent System)",
    },
    {
      question:
        "What is the name of the organization that Iron Man is a part of in the Marvel Cinematic Universe?",
      answer: " Iron Man is a part of The Avengers in the Marvel Universe.",
    },

    {
      question: "Who played Iron Man in the Marvel movies?",
      answer: "Robert Downey Jr. ",
    },
    {
      question:
        " What is the name of the actor who played Iron Man's friend and assistant, Happy Hogan, in the Marvel movies?",
      answer: "Jon Favreau played Happy Hogan",
    },
    {
      question:
        "What is the name of the terrorist organization that kidnaps Tony Stark in the first Iron Man movie?",
      answer: "The Ten Rings",
    },
    {
      question:
        "In the Iron Man comics, who is Tony Stark's biological father?",
      answer: "Howard Stark",
    },
    {
      question:
        "What is the name of the device that Tony Stark creates to keep his heart beating after being injured in the first Iron Man movie?",
      answer: "The Arc Reactor",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextCard = () => {
    setCurrentIndex(Math.floor(Math.random() * flashcards.length));
    setShowAnswer(false);
  };

  const handlePrevCard = () => {
    setCurrentIndex(currentIndex - 1);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div>
      <h1>Iron Man Flashcards!</h1>
      <h2>Are you truley an Iron Man Fan?</h2>
      <h3>Number of cards: {flashcards.length} </h3>

      <div className="card">
        <div className="question-container">
          <h3 className="question">
            {showAnswer
              ? flashcards[currentIndex].answer
              : flashcards[currentIndex].question}
          </h3>
        </div>
        <div className="button-container">
          {showAnswer ? (
            <button
              className="next-button"
              onClick={handleNextCard}
              disabled={currentIndex === flashcards.length - 1}
            >
              Next
            </button>
          ) : (
            <button className="show-answer-button" onClick={handleShowAnswer}>
              Show Answer
            </button>
          )}
          {currentIndex > 0 && (
            <button className="prev-button" onClick={handlePrevCard}>
              Previous
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
