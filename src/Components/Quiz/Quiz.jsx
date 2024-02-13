import "./Quiz.css";
import { useState } from "react";
import Result from "./Result/Result";
import Question from "./Question/Question";

const questions = [
  {
    question: "What is my name?",
    answers: ["React", "Mbox", "VS Studio"],
    correct: 0,
  },
  {
    question: "What is my age?",
    answers: [10, 5, 3],
    correct: 1,
  },
  {
    question: "Do you like me?",
    answers: ["Yes", "No", "Maybe"],
    correct: 0,
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  function clickMyAnser(i) {
    setStep(step + 1);
    if (i === questions[step].correct) {
      setCorrectAnswer(correctAnswer + 1);
      console.log(correctAnswer);
    }
  }
  function tryAgain() {
    setStep(0);
    setCorrectAnswer(0);
  }

  return (
    <>
      <div className="quiz__question-container">
        {step < questions.length ? (
          <ul className="quiz__answers">
            <h1 className="quiz__question">Question {step + 1}</h1>
            {questions[step].answers.map((item, i) => (
              <Question onClick={() => clickMyAnser(i)} key={i} item={item} />
            ))}
          </ul>
        ) : (
          <Result
            onClick={tryAgain}
            correctAnswer={correctAnswer}
            numberOfQuestions={questions.length}
          />
        )}
      </div>
    </>
  );
}
