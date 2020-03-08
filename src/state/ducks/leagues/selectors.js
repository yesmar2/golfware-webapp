import { buildApiSelectors } from '../../utils';
import { DUCK_NAMESPACE } from './types';

const apiSelectors = buildApiSelectors(DUCK_NAMESPACE);

const selectLeagues = (appState) => apiSelectors.selectData(appState);

const leagueSelectors = {
    ...apiSelectors,
    selectLeagues,
};

export default leagueSelectors;
