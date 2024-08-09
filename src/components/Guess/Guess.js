import React from "react";

import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess = "", answer }) {
  const checkedGuess = checkGuess(guess, answer) || [];

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span className={`cell ${checkedGuess[index]?.status ?? ""}`.trim()}>
          {checkedGuess[index]?.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
