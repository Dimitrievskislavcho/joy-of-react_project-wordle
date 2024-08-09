import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../../components/GuessInput";
import GuessedWords from "../../components/GuessedWords";
import GameResult from "../GameResult/GameResult.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const initialGameResults = {
  guesses: 0,
  correctGuess: false,
};

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameResults, setGameResults] = React.useState({
    ...initialGameResults,
  });
  const isGameOver =
    gameResults.correctGuess || gameResults.guesses >= NUM_OF_GUESSES_ALLOWED;

  console.info({ answer });

  function submitGuessedWord(newGuess) {
    setGuesses([...guesses, newGuess]);
    setGameResults({
      correctGuess: newGuess === answer,
      guesses: guesses.length + 1,
    });
  }

  function resetGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameResults({ ...initialGameResults });
  }

  return (
    <>
      <GuessedWords guesses={guesses} answer={answer}></GuessedWords>
      <GuessInput
        isDisabled={isGameOver}
        submitGuessedWord={submitGuessedWord}
      ></GuessInput>
      {isGameOver && (
        <GameResult
          resetGame={resetGame}
          correctAnswer={answer}
          gameResults={gameResults}
        ></GameResult>
      )}
    </>
  );
}

export default Game;
