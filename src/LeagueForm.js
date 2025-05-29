import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {GetLeagueUrl, GetTeamUrl, BuildSeasonDropDown, SetLeagueData} from './AppUtils';

function LeagueForm({ setLeagueData }) {
  const [inputs, setInputs] = useState({});

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

    /*axios.get(GetLeagueUrl(inputs.leagueName, null))
        .then(response => {
          setLeagueData(response.data);
        })
        .catch(error => {
          console.error(error);
        });*/
    SetLeagueData(inputs.leagueName, null, setLeagueData);
    //setCookie('lastLeague', inputs.leagueName, { path: '/' });
    localStorage.setItem('lastLeague', inputs.leagueName);

    setInputs({});
  };

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
