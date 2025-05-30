import './footboll-react.css';
import React, { useState, useEffect } from 'react';
import LeagueForm from './LeagueForm';
import LeagueTable from './LeagueTable';
import {SetLeagueData} from './AppUtils';
import {Link} from 'react-router-dom';

function Home() {
    const [leagueData, setLeagueData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('lastLeague')) {
            var season = null;
            if (localStorage.getItem('season')) {
                season = localStorage.getItem('season');
            }
            SetLeagueData(localStorage.getItem('lastLeague'), season, setLeagueData);
        }
    }, []);
  
    return (
      <div className="container">
        <h1>League Page</h1>
        <Link to="/team">Link to team page</Link>
        <LeagueForm setLeagueData={setLeagueData}  />
        <hr />
        <h2>League Status</h2>
        <LeagueTable leagueData={leagueData} />
      </div>
    );
}

export default Home;
