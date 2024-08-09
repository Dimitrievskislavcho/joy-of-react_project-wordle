import React from "react";

function GameResult({ gameResults, correctAnswer, resetGame }) {
  return (
    <div className={`banner ${gameResults.correctGuess ? "happy" : "sad"}`}>
      {gameResults.correctGuess ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{gameResults.guesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{correctAnswer}</strong>.
        </p>
      )}
      <button
        onClick={resetGame}
        className={gameResults.correctGuess ? "happy" : "sad"}
      >
        ↻
      </button>
    </div>
  );
}

export default GameResult;
