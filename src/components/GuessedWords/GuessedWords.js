
import React from "react";
 
import Guess from "../../components/Guess"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils.js";

function GuessedWords({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map(guess => 
        <Guess key={guess} guess={guesses[guess]} answer={answer}></Guess>
      )}
    </div>
  );
}

export default GuessedWords;
