import {
    SET_ACTIVE_LEAGUE_ID,
} from './types';

const setSelectedLeagueId = (selectedLeagueId) => ({
    type: SET_ACTIVE_LEAGUE_ID,
    selectedLeagueId,
});

export {
    setSelectedLeagueId,
};
