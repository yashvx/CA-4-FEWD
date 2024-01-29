import React, { useState } from 'react';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import questions from './components/questions';
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleAnswer = (selectedOption) => {
    const currentQuestionObject = questions[currentQuestion];
    const isCorrect = currentQuestionObject.options.find((option) => option.id === selectedOption).isCorrect;

    setUserAnswers([...userAnswers, { questionIndex: currentQuestion, selectedOption, isCorrect }]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const allQuestionsAnswered = currentQuestion === questions.length;

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <span className="slider"></span>
        </label>
        <span>{darkMode ? 'Dark' : 'Light'} Mode</span>
      </div>

      <div className="content-box">
        {allQuestionsAnswered ? (
          <Result userAnswers={userAnswers} />
        ) : (
          <QuestionBox question={questions[currentQuestion]} onAnswer={handleAnswer} darkMode={darkMode} />
        )}
      </div>
    </div>
  );
};

export default App;
