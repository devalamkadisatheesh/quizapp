// src/components/Question.js
import React from 'react';

const Question = ({ question, timeLeft, handleAnswer }) => {
    if (!question) {
        return <p>Loading question...</p>; // Prevents accessing undefined question
    }

    return (
        <div className="question-container">
            <h2>{question.question}</h2>
            <div className="options">
                {question.options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
            <p className="timer">Time left: {timeLeft}s</p>
        </div>
    );
};

export default Question;
