import React from 'react';

const Team = () => {
    alert(localStorage.getItem('currentTeam'));
    return (
        <div>
            <h1>Team Page</h1>
        </div>
    );
};

export default Team;