
import React, { useState } from 'react';

const Authentication = ({ setUser }) => {
    const [name, setName] = useState('');

    const handleLogin = () => {
        if (name.trim()) {
            localStorage.setItem('user', name);
            setUser(name);
        }
    };

    return (
        <div className="auth-container">
            <h2>Enter Your Name</h2>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={handleLogin}>Start Quiz</button>
        </div>
    );
};

export default Authentication;