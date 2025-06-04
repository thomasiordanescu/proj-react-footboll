import './footboll-react.css';
import React, { useState, useEffect } from 'react';
import LeagueForm from './LeagueForm';
import LeagueTable from './LeagueTable';
import {SetLeagueData, GetTeamUrl} from './AppUtils';
import {Link} from 'react-router-dom';
import TeamTooltip from './TeamTooltip.js';
import axios from 'axios';

function Home() {
    const [leagueData, setLeagueData] = useState([]);
    const [hoveredTeam, setHoveredTeam] = useState(null);
    const [toolTipPosition, setToolTipPosition] = useState({x: 0, y: 0});
    const [teamCache, setTeamCache] = useState({});

    useEffect(() => {
        if (localStorage.getItem('lastLeague')) {
            var season = null;
            if (localStorage.getItem('season')) {
                season = localStorage.getItem('season');
            }
            SetLeagueData(localStorage.getItem('lastLeague'), season, setLeagueData);
        }
    }, []);

    const fetchTeamData = async (teamId) => {
      if (teamCache[teamId]) {
        return teamCache[teamId];
      }

      try {
        const response = await axios.get(GetTeamUrl(teamId));
        const teamData = response.data.teams[0];

        setTeamCache((prevCache) => ({
          ...prevCache,
          [teamId]: teamData,
        }));

        return teamData;
      } catch (error) {
        console.error("There was an error fetching the team data: ", error);
        return null;
      }
    };

    const handleTeamHover = async (e, teamId) => {
      setHoveredTeam(teamId);
      setToolTipPosition({
        x: e.clientX + window.scrollX + 15,
        y: e.clientY + window.scrollY,
      });

      const teamData = await fetchTeamData(teamId);

      if (teamData) {
        setHoveredTeam(teamId);
      }
    };

    const handleTeamLeave = () => {
      setHoveredTeam(null);
    };
  
    return (
      <div className="container">
        <h1>League Page</h1>
        <Link to="/team">Link to team page</Link>
        <LeagueForm setLeagueData={setLeagueData}  />
        <hr />
        <h2>League Status</h2>
        <LeagueTable
          leagueData={leagueData}
          onTeamHover={handleTeamHover}
          onTeamLeave={handleTeamLeave} 
        />

        {hoveredTeam && (
        <TeamTooltip
          teamInfo={teamCache[hoveredTeam]}
          position={toolTipPosition}
        />
      )}
      </div>
    );
}

export default Home;
