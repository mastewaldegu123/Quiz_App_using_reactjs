import React, { useContext } from "react";
import "../styles.css";
import { QuizContext } from "../helpers/Context";
const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="menu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};
export default MainMenu;
