import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Authentication from './components/Authentication';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';
import { questions } from './data/questions';
import './styles/app.css';

const App = () => {
    const [user, setUser] = useState(localStorage.getItem('user') || null);
    const [subject, setSubject] = useState(null);

    if (!user) return <Authentication setUser={setUser} />;

    return (
        <Router>
            <div className="app-container">
                {!subject ? (
                    <div className="subject-selection">
                        <h2>Choose a Subject</h2>
                        {Object.keys(questions).map((sub) => (
                            <button key={sub} onClick={() => setSubject(sub)}>{sub.toUpperCase()}</button>
                        ))}
                    </div>
                ) : (
                    <Quiz subject={subject} user={user} />
                )}
                
                <Leaderboard />
            </div>
        </Router>
    );
};

export default App;
