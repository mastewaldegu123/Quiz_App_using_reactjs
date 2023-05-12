import React, { useContext } from "react";
import "../styles.css";
import { QuizContext } from "../helpers/Context";
const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
    <div className="menu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
    </div>
  );
};
export default MainMenu;
