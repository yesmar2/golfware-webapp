import { DUCK_NAMESPACE } from './types';

const _selectGlobal = (appState) => appState[DUCK_NAMESPACE];
const selectSelectedLeagueId = (appState) => _selectGlobal(appState).selectedLeagueId;

const globalSelectors = {
    selectSelectedLeagueId,
};

export default globalSelectors;
