import React from 'react';
import { useFavorites } from './AddToFavorites';

const TeamTooltip = ({ teamInfo, position }) => {
  const { favorites } = useFavorites();
  const isFavorite = teamInfo && favorites.some(f => f.idTeam === teamInfo.idTeam);

  if (!teamInfo || !teamInfo.strTeam) {
    return (
      <div
        className="team-tooltip"
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          zIndex: 100,
        }}
      >
        <p>Loading team information...</p>
      </div>
    );
  }

  return (
    <div
      className="team-tooltip"
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        zIndex: 100,
      }}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>{teamInfo.strTeam}</h3>
          {isFavorite && <span style={{ color: '#ffc20c', marginLeft: '10px' }}>★</span>}
        </div>
        <img
          src={teamInfo.strBadge}
          alt={teamInfo.strTeam}
          width="50"
        />
        <p>Country: {teamInfo.strCountry}</p>
        <p>Stadium: {teamInfo.strStadium}</p>
        <p>Capacity: {teamInfo.intStadiumCapacity?.toLocaleString() || 'N/A'}</p>
        <p>Founded: {teamInfo.intFormedYear}</p>
        <p>
          Website:{' '}
          <a href={teamInfo.strWebsite} target="_blank" rel="noreferrer" style={{ color: '#ffc20c' }}>
            {teamInfo.strWebsite}
          </a>
        </p>
      </div>
    </div>
  );
};

export default TeamTooltip;