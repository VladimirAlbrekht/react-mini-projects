import './Result.css'

export default function Result({correctAnswer, numberOfQuestions,onClick}) {
    
  return (
    <div className="quiz__result-container">
      <h2 className="quiz__congratulations">Congratulations!</h2>
      <p className="quiz__result">You answer {correctAnswer} questions from {numberOfQuestions}</p>
      <button onClick={onClick} className="btn quiz__btn btn-info">Try again</button>
    </div>
  );
}
