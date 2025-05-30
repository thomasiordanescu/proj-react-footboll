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

export default LeagueTable;