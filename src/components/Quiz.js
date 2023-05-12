import React, { useState, useContext } from "react";
import "../styles.css";
import { QuizContext } from "../helpers/Context";
import { Questions } from "../helpers/QuestionBank";
const Quiz = () => {
  const [currQuestion, setCurrentQuestion] = useState(0);
  const [optionChoosen, setOpetionChoosen] = useState("");
  const { score, setScore } = useContext(QuizContext);
  const nextQuestion = () => {
    if (Questions[currQuestion].asnwer == optionChoosen) {
      setScore(score + 1);
    }

    setCurrentQuestion(currQuestion + 1);
  };
  const finishQuiz = () => {
    if (Questions[currQuestion].asnwer == optionChoosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };
  return (
    <div className="quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="list">
        <button onClick={() => setOpetionChoosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setOpetionChoosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setOpetionChoosen("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setOpetionChoosen("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}> Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}> next question </button>
      )}
    </div>
  );
};
export default Quiz;
