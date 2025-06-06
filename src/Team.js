import React, { useState, useEffect } from 'react';
import {SetTeamData} from './AppUtils';

const Team = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('currentTeam')) {
            SetTeamData(localStorage.getItem('currentTeam'), setTeamData);
        }
    }, []);

    const dataArray = teamData?.teams || [];
    var description = "Description place holder";
    if (dataArray.length > 0) {
        description = teamData.teams[0];
    }

    var descriptionStr = description.strDescriptionEN || "";
    var formattedDescription = descriptionStr.replaceAll(".", ".<br /><br />");

    return (
        <div>
            <h1>Team Page</h1>
            <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />
        </div>
    );
};

export default Team;
