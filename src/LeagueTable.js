import { useNavigate } from "react-router-dom";
import React from 'react';
import { useFavorites } from "./AddToFavorites";

function GenerateTeamLink({item}) {
    const navigate = useNavigate();

    const onTeamClick = () => {
        localStorage.setItem('currentTeam', item.strTeam);
        navigate("/team");
    }

    return (
        <button class="link-button" onClick={onTeamClick}>{item.strTeam}</button>
    )
}

function GenerateRow({ item, onTeamHover, onTeamLeave }) {
  const { toggleFavorite } = useFavorites();

  return (
    <tr 
      key={item.idTeam}
      onMouseEnter={(e) => onTeamHover(e, item.strTeam)}
      onMouseLeave={onTeamLeave}
      onDoubleClick={() => toggleFavorite(item)}
      className="team-row"
    >
      <td className="align-center">{item.intRank}</td>
      <td className="team-cell">
        <img src={item.strBadge} alt="" height={30} width={30} />
        <span className="team-name"><GenerateTeamLink item={item} /></span>
      </td>
      <td className="align-center">{item.intGoalDifference}</td>
      <td className="align-center">{item.intPoints}</td>
    </tr>
  );
}

function LeagueTable({ leagueData, onTeamHover, onTeamLeave }) {
  const dataArray = leagueData?.table || [];

  return (
    <div className="table-container">
      <table className="league-table">
        <thead>
          <tr key="header">
            <th className="align-center">Rank</th>
            <th>Team</th>
            <th className="align-center">Goal Diff</th>
            <th className="align-center">Pts</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((item) => (
            <GenerateRow
              key={item.idTeam}
              item={item}
              onTeamHover={onTeamHover}
              onTeamLeave={onTeamLeave}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeagueTable;
