import { DUCK_NAMESPACE } from './types';

const _selectGlobal = (appState) => appState[DUCK_NAMESPACE];
const selectSelectedSeasonId = (appState) => _selectGlobal(appState).selectedSeasonId;

const globalSelectors = {
    selectSelectedSeasonId,
};

export default globalSelectors;
