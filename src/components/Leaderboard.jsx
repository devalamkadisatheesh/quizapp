import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        const uniqueLeaderboard = storedLeaderboard.filter((entry, index, self) =>
            index === self.findIndex((e) => e.name === entry.name && e.subject === entry.subject)
        );
        setLeaderboard(uniqueLeaderboard);
    }, []);

    return (
        <div className="leaderboard-container">
            <h2>Leaderboard</h2>
            <ul>
                {leaderboard.map((entry, index) => (
                    <li key={index}>{entry.name} - {entry.subject}: {entry.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
