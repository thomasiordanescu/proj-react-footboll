import React from 'react';
import { useFavorites } from './AddToFavorites';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container">
      <h1>Favorite Teams</h1>
      <Link to="/" className="back-link">← Back to League</Link>
      
      {favorites.length === 0 ? (
        <div className="empty-state">
          <p>No favorites yet!</p>
          <p>Double-click on team badge in the league table to add/remove as favorite.</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map(team => (
            <div key={team.idTeam} className="team-card">
              <div className="card-header">
                <span className="rank-badge">#{team.intRank}</span>
              </div>
              
              <div className="team-info">
                <img src={team.strBadge} alt={team.strTeam} height={60} />
                <h3>{team.strTeam}</h3>
              </div>
              
              <div className="team-stats">
                <div className="stat">
                  <span>Points</span>
                  <strong>{team.intPoints}</strong>
                </div>
                <div className="stat">
                  <span>Goal Diff</span>
                  <strong>{team.intGoalDifference}</strong>
                </div>
              </div>
              
              <Link 
                to="/team" 
                className="team-link"
                onClick={() => localStorage.setItem('currentTeam', team.strTeam)}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;