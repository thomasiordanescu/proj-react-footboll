import { useNavigate } from "react-router-dom";
import React from 'react';

function GenerateTeamLink({item}) {
    const navigate = useNavigate();

    const onTeamClick = () => {
        localStorage.setItem('currentTeam', item.idTeam);
        navigate("/team");
    }

    return (
        <button class="link-button" onClick={onTeamClick}>{item.strTeam}</button>
    )
}

function GenerateRow({item}) {
    return (
        <tr key={item.id}>
            <td>{item.intRank}</td>
            <td><img src={item.strBadge} alt='' height={50} width={50} /><GenerateTeamLink item={item} /></td>
            <td>{item.intGoalDifference}</td>
            <td>{item.intPoints}</td>
        </tr>
    ) 
}

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
                <GenerateRow item={item} />
            ))}
        </table>
    );
}

export default LeagueTable;
