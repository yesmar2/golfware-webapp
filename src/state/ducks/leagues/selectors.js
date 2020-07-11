import { createSelector } from 'reselect';
import { buildApiSelectors } from '../../utils';
import { DUCK_NAMESPACE } from './types';
import { globalSelectors } from '../global';

const apiSelectors = buildApiSelectors(DUCK_NAMESPACE);

const selectActiveSeasonId = createSelector(
    globalSelectors.selectSelectedLeagueId,
    apiSelectors.selectData,
    (selectedLeagueId, leagues) => {
        if (!selectedLeagueId || leagues.length < 1) {
            return null;
        }

        return leagues.find((league) => league._id === selectedLeagueId).activeSeasonId;
    },
);

const leagueSelectors = {
    ...apiSelectors,
    selectActiveSeasonId,
};

export default leagueSelectors;
