import { DUCK_NAMESPACE } from './types';

const _selectGlobal = (appState) => appState[DUCK_NAMESPACE];
const selectSelectedSeasonId = (appState) => _selectGlobal(appState).selectedSeasonId;
const selectSelectedEventId = (appState) => _selectGlobal(appState).selectedEventId;

const globalSelectors = {
    selectSelectedEventId,
    selectSelectedSeasonId,
};

export default globalSelectors;
