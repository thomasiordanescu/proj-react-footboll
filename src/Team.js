import React, { useState, useEffect } from 'react';
import {SetTeamData} from './AppUtils';
import { useFavorites } from './AddToFavorites';
import { Link } from 'react-router-dom';

const Team = () => {
    const [teamData, setTeamData] = useState([]);
    const { favorites } = useFavorites();

    useEffect(() => {
        if (localStorage.getItem('currentTeam')) {
            SetTeamData(localStorage.getItem('currentTeam'), setTeamData);
        }
    }, []);

    const dataArray = teamData?.teams || [];
    const team = dataArray.length > 0 ? dataArray[0] : null;
    
    // Checking whether current team is favorited or not
    const isFavorite = team && favorites.some(f => f.idTeam === team.idTeam);

    return (
        <div className="container">
            <Link to="/" className="back-link">← Back to League</Link>
            
            {team ? (
                <div className="team-detail">
                    <div className="team-header">
                        <img src={team.strTeamBadge} alt={team.strTeam} height={100} />
                        <h1>{team.strTeam}</h1>
                        {isFavorite && <span className="favorite-badge">★ Favorite</span>}
                    </div>
                    
                    <div className="team-info-grid">
                        <p><strong>Formed:</strong> {team.intFormedYear}</p>
                        <p><strong>Stadium:</strong> {team.strStadium}</p>
                        <p><strong>Capacity:</strong> {team.intStadiumCapacity?.toLocaleString() || 'N/A'}</p>
                        <p><strong>Location:</strong> {team.strStadiumLocation}</p>
                        <p><strong>Country:</strong> {team.strCountry}</p>
                        <p><strong>League:</strong> {team.strLeague}</p>
                    </div>
                    
                    <div 
                        className="team-description" 
                        dangerouslySetInnerHTML={{ 
                            __html: (team.strDescriptionEN || "No description available")
                                .replaceAll(/(?:\r\n|\r|\n)/g, '<br />')
                        }} 
                    />
                </div>
            ) : (
                <p>Loading team data...</p>
            )}
        </div>
    );
};

export default Team;