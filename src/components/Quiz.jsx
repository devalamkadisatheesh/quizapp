import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import { questions } from '../data/questions';

const Quiz = ({ subject, user }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [showResult, setShowResult] = useState(false);
    const quizQuestions = questions[subject].slice(0, 10);

    useEffect(() => {
        if (timeLeft === 0) handleNextQuestion();
        const timer = setInterval(() => setTimeLeft(time => time - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleAnswer = (answer) => {
        if (quizQuestions[currentQuestion] && answer === quizQuestions[currentQuestion].answer) {
            setScore(score + 1);
        }
        handleNextQuestion();
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < quizQuestions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setTimeLeft(10);
        } else {
            setShowResult(true);
            saveToLocalStorage();
        }
    };

    const saveToLocalStorage = () => {
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        leaderboard.push({ name: user, subject, score });
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    };

    return (
        <div className="quiz-container">
            {!showResult ? (
                <div>
                    <h3>Question {currentQuestion + 1}/10</h3>
                    <Question 
                        question={quizQuestions[currentQuestion]} 
                        timeLeft={timeLeft} 
                        handleAnswer={handleAnswer} 
                    />
                    <button onClick={handleNextQuestion}>Next</button>
                </div>
            ) : (
                <Result score={score} subject={subject} />
            )}
        </div>
    );
};

export default Quiz;