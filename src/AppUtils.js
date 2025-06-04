import axios from 'axios';

export function GetLeagueUrl(id, season) {
    let result = 'https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=' + id;
    if (season) {
        result += '&s=' + season + '-' + (parseInt(season) + 1);
    }
    return result;
}

export function GetTeamUrl(id) {
    let result = 'https://www.thesportsdb.com/api/v1/json/123/lookupteam.php?id=' + id;

    return result;
}

export function SetLeagueData(leagueName, season, setLeagueData) {
    axios.get(GetLeagueUrl(leagueName, season))
        .then(response => {
            setLeagueData(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

export function SetTeamData(teamId, setTeamData) {
    axios.get(GetTeamUrl(teamId))
        .then(response => {
            setTeamData(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}
