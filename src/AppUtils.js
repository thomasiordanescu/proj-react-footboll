import axios from 'axios';

export function GetLeagueUrl(id, season) {
    let result = 'https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=' + id;

    if (season) {
        result += '&s=' + season + '-' + (season + 1);
    }

    return result;
}

export function GetTeamUrl(id, season) {
    let result = 'https://www.thesportsdb.com/api/v1/json/123/lookupteam.php?id=' + id;

    return result;
}


export function BuildSeasonDropDown() {
    let year = new Date().getFullYear();
   
    const seasons = []
    for (let i = year - 1; i > year - 21; i--) {
      seasons.push(i)
    }
    const options = seasons.map((s) => <option value={s}>{s}</option>);
   
    return options;
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