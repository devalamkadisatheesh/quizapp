import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = ({ score, subject }) => {
    const navigate = useNavigate();
    return (
        <div className="result-container">
            <h2>Your Score: {score}/10</h2>
            <button onClick={() => navigate('/home')}>Back to Home</button>
        </div>
    );
};

export default Result;