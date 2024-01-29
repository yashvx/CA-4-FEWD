import React from 'react';

const Result = ({ userAnswers }) => {
  // Calculate the user's score in percentage
  const calculateScore = () => {
    const totalQuestions = userAnswers.length;
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;

    return scorePercentage.toFixed(2); // Display the score with two decimal places
  };

  return (
    <div className="result-box">
      <h2>Quiz Completed</h2>
      <p>Your Score: {calculateScore()}%</p>
    </div>
  );
};

export default Result;

