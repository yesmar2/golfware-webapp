import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { leagueSelectors } from './state/ducks/leagues';

const LeagueSelection = () => {
    const leagues = useSelector(leagueSelectors.selectData);

    return (
        <div>
            {leagues.map((league) => (
                <Link to="/dashboard">{league.name}</Link>
            ))}
        </div>
    );
};

export default LeagueSelection;
