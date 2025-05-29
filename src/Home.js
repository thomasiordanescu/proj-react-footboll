import './footboll-react.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LeagueForm from './LeagueForm';
import {GetLeagueUrl, GetTeamUrl, BuildSeasonDropDown, SetLeagueData} from './AppUtils';

function Home() {
    const [leagueData, setLeagueData] = useState([]);

    /*useEffect(() => {
        if (cookies.lastLeague) {
          SetLeagueData(cookies.lastLeague, null, setLeagueData);
        }
    }, []);*/
    useEffect(() => {
        if (localStorage.getItem('lastLeague')) {
          SetLeagueData(localStorage.getItem('lastLeague'), null, setLeagueData);
        }
    }, []);
  
    return (
      <div className="container">
        <h1>League Page</h1>
        <LeagueForm setLeagueData={setLeagueData}  />
        <hr />
        <h2>League Status</h2>
        <LeagueTable leagueData={leagueData} />
      </div>
    );
}

//{JSON.stringify(leagueData)}
      //{JSON.stringify(leagueData.table)}
      //item: {leagueData.table[0].strTeam}
//<MyTable leagueData={leagueData} />

function LeagueTable({leagueData}) {

    const dataArray = leagueData?.table || [];
    return (
            <table>
                <tr key={"header"}>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>Goal Diff</th>
                    <th>Points</th>
                </tr>
                {dataArray.map((item) => (
                <tr key={item.id}>
                    <td>{item.intRank}</td>
                    <td>{item.strTeam}</td>
                    <td>{item.intGoalDifference}</td>
                    <td>{item.intPoints}</td>
                </tr>
                ))}
            </table>
    );
}

export default Home;