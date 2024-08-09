import React from "react";

function GuessInput({ isDisabled, submitGuessedWord }) {
  const [guessedWordInputValue, setGuessedWordInputValue] = React.useState('');

  return (
    <form className="guess-input-wrapper" onSubmit={event => {
      event.preventDefault();
      submitGuessedWord(guessedWordInputValue);
      setGuessedWordInputValue("");
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={isDisabled}
        required={true}
        pattern="[A-Z]{5}"
        minLength={5}
        title="5 letters worf"
        maxLength={5}
        id="guess-input"
        type="text"
        value={guessedWordInputValue}
        onChange={event => {
          const { value, maxLength } = event.target;
          setGuessedWordInputValue(value.slice(0, maxLength).toLocaleUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
