import "./styles.css";
import { useState } from "react";

import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import { QuizContext } from "./helpers/Context";
import EndScreen from "./components/EndScreen";
export default function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <QuizContext.Provider value={{gameState, setGameState }}>
        <h1>Quiz App</h1>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}
