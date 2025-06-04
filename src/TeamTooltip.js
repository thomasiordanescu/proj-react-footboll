import React from 'react';

const TeamTooltip = ({ teamInfo, position }) => {
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
        <h3>{teamInfo.strTeam}</h3>
        <img
          src={teamInfo.strTeamBadge}
          alt={teamInfo.strTeam}
          width="50"
        />
        <p>Country: {teamInfo.strCountry}</p>
        <p>Stadium: {teamInfo.strStadium}</p>
        <p>Capacity: {teamInfo.intStadiumCapacity}</p>
        <p>Founded: {teamInfo.intFormedYear}</p>
        <p>
          Website:{' '}
          <a href={teamInfo.strWebsite} target="_blank" rel="noreferrer">
            {teamInfo.strWebsite}
          </a>
        </p>
      </div>
    </div>
  );
};

export default TeamTooltip;