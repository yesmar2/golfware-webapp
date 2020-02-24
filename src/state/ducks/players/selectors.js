import { buildApiSelectors } from "../../utils";
import { DUCK_NAMESPACE, FILTER } from './types';

const apiSelectors = buildApiSelectors(DUCK_NAMESPACE);

const _selectFilterText = (appState) => {
    return appState[DUCK_NAMESPACE][FILTER];
}

const selectPlayers = (appState) => {
    //TODO: Figure out if this is best place to create fullName
    //TODO: optimize/memoize
    const players = apiSelectors.selectData(appState);
    const filterText = _selectFilterText(appState);

    return players.map(player => {
        return {
            ...player,
            fullName: `${player.firstName} ${player.lastName}`
        }
    }).filter(player => { 
        const fullName = player.fullName.toLowerCase();
        return fullName.indexOf(filterText.toLowerCase()) !== -1;
    });
};

const playerSelectors = {
    ...apiSelectors,
    selectPlayers,
}

export default playerSelectors;