import React, { useState } from 'react';
import {SetLeagueData} from './AppUtils';

function LeagueForm({ setLeagueData }) {
  //const [inputs, setInputs] = useState({});
  const [inputs, setInputs] = useState(() => {
    return {
      season: localStorage.getItem('season') || new Date().getFullYear() - 1,
      leagueName: localStorage.getItem('lastLeague') || "0",
    };
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    if (!inputs.leagueName || inputs.leagueName === "0") {
      alert("Must select a league!");
      return;
    }

    SetLeagueData(inputs.leagueName, inputs.season, setLeagueData);
    localStorage.setItem('lastLeague', inputs.leagueName);
    localStorage.setItem('season', inputs.season);

    //setInputs({});
  };

  function BuildSeasonDropDown() {
    let year = new Date().getFullYear();
   
    const seasons = []
    for (let i = year; i > year - 16; i--) {
      seasons.push(i)
    }
    const options = seasons.map((s) => <option value={s}>{s}-{s + 1}</option>);
   
    return options;
  }

  return (
    <form id="add-movie-form" onSubmit={HandleSubmit}>
      <fieldset>
        <legend>Select League</legend>

        <label htmlFor="rating-field">League:</label>
        <select
          id="rating-field"
          className="form-control"
          name="leagueName"
          value={inputs.leagueName || ""}
          onChange={handleChange}
        >
          <option value="0">Choose League...</option>
          <option value="4328">English Premier League</option>
          <option value="4331">German Bundesliga</option>
          <option value="4332">Italian Serie A</option>
          <option value="4334">French Ligue 1</option>
          <option value="4335">Spanish La Liga</option>
        </select>

        <label htmlFor="rating-field">Season:</label>
        <select
          id="rating-field"
          className="form-control"
          name="season"
          value={inputs.season || ""}
          onChange={handleChange}
        >
            <BuildSeasonDropDown />
        </select>
        

        <input
          type="submit"
          className="btn btn-success mt-3"
          value="Show League status"
        />
      </fieldset>
    </form>
  );
}

export default LeagueForm;
