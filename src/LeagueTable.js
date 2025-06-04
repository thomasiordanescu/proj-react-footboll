function GenerateRow({ item, onTeamHover, onTeamLeave }) {
  return (
    <tr key={item.idTeam}>
      <td>{item.intRank}</td>
      <td
        className="team-cell"
        onMouseEnter={(e) => onTeamHover(e, item.idTeam)}
        onMouseLeave={onTeamLeave}
      >
        <img src={item.strBadge} alt="" height={30} width={30} />
        {item.strTeam}
      </td>
      <td>{item.intGoalDifference}</td>
      <td>{item.intPoints}</td>
    </tr>
  );
}

function LeagueTable({ leagueData, onTeamHover, onTeamLeave }) {
  const dataArray = leagueData?.table || [];

  return (
    <table>
      <thead>
        <tr key="header">
          <th>Rank</th>
          <th>Team</th>
          <th>Goal Diff</th>
          <th>Points</th>
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
  );
}

export default LeagueTable;
