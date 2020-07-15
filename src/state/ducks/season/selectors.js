import { createSelector } from 'reselect';
import { buildApiSelectors } from '../../utils';
import { DUCK_NAMESPACE, PLAYER_FILTER } from './types';

const apiSelectors = buildApiSelectors(DUCK_NAMESPACE);

const selectEvents = (appState) => apiSelectors.selectData(appState).events;
const selectTeams = (appState) => apiSelectors.selectData(appState).teams;
const selectFilterText = (appState) => appState[DUCK_NAMESPACE][PLAYER_FILTER];

const selectPlayers = createSelector(
    selectTeams,
    (teams) => teams.reduce((players, team) => [
        ...players,
        ...team.players,
    ], []),
);

const selectFilteredPlayers = createSelector(
    selectPlayers,
    selectFilterText,
    (players, filterText) => players
        .map((player) => ({
            ...player,
            fullName: `${player.firstName} ${player.lastName}`,
        }))
        .filter((player) => {
            const fullName = player.fullName.toLowerCase();
            return fullName.indexOf(filterText.toLowerCase()) !== -1;
        }),
);

const leagueSelectors = {
    ...apiSelectors,
    selectEvents,
    selectTeams,
    selectPlayers,
    selectFilteredPlayers,
};

export default leagueSelectors;
