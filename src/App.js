import "./styles.css";
import { useState } from "react";

import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import { QuizContext } from "./helpers/Context";
import EndScreen from "./components/EndScreen";
export default function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <QuizContext.Provider value={{ score,setScore, gameState, setGameState }}>
        <h1>Quiz App</h1>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}
