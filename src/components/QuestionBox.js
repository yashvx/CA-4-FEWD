import React, { useState } from 'react';
import './QuestionBox.css';

const QuestionBox = ({ question, onAnswer, darkMode }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [highlighted, setHighlighted] = useState(false);

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
    setHighlighted(true); // Highlight when an option is clicked
  };

  const handleRemoveHighlightClick = () => {
    setHighlighted(false); // Remove highlight
  };

  const handleSubmit = () => {
    onAnswer(selectedOption);
    setSelectedOption(null);
  };

  return (
    <div className={`question-box ${highlighted ? 'highlighted' : ''} ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="highlight-buttons">
        <button onClick={handleRemoveHighlightClick}>Remove Highlight</button>
      </div>
      <h2>{question.text}</h2>
      <div className="options">
        {question.options.map((option) => (
          <div
            key={option.id}
            className={`option ${selectedOption === option.id ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option.id)}
          >
            {option.text}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={selectedOption === null}>
        Submit
      </button>
    </div>
  );
};

export default QuestionBox;
