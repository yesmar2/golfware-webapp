import { createSelector } from 'reselect';
import { buildApiSelectors } from '../../utils';
import { DUCK_NAMESPACE, FILTER } from './types';

const apiSelectors = buildApiSelectors(DUCK_NAMESPACE);

const selectFilterText = (appState) => appState[DUCK_NAMESPACE][FILTER];

const selectFilteredPlayers = createSelector(
    apiSelectors.selectData,
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

const playerSelectors = {
    ...apiSelectors,
    selectFilteredPlayers,
};

export default playerSelectors;
