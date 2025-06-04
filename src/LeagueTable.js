function GenerateRow({ item, onTeamHover, onTeamLeave }) {
  return (
    <tr key={item.idTeam}>
      <td className="align-center">{item.intRank}</td>
      <td
        className="team-cell"
        onMouseEnter={(e) => onTeamHover(e, item.idTeam)}
        onMouseLeave={onTeamLeave}
      >
        <img src={item.strBadge} alt="" height={30} width={30} />
        <span className="team-name">{item.strTeam}</span>
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
