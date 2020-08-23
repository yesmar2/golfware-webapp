import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Switch,
    Route,
    useParams,
} from 'react-router-dom';
import LeagueNav from './LeagueNav';
import ScoreEntryNav from './ScoreEntryNav';
import { globalOperations } from '../state/ducks/global';

const LeagueHeader = () => {
    const { selectedSeasonId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(globalOperations.loadSeasonData(selectedSeasonId));
    }, [dispatch, selectedSeasonId]);

    return (
        <Switch>
            <Route path="/:selectedSeasonId/scoreentry/:selectedEventId" exact>
                <ScoreEntryNav />
            </Route>
            <Route>
                <LeagueNav />
            </Route>
        </Switch>
    );
};

export default LeagueHeader;
