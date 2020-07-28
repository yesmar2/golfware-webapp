import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { leagueSelectors } from '../state/ducks/leagues';

const LeagueSelection = () => {
    const leagues = useSelector(leagueSelectors.selectData);

    return (
        <div>
            {leagues.map((league) => (
                <div key={league._id}>
                    <Link to={`${league.activeSeasonId}/dashboard`}>{league.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default LeagueSelection;
