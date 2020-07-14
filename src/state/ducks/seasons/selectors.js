import { buildApiSelectors } from '../../utils';
import { DUCK_NAMESPACE } from './types';

const apiSelectors = buildApiSelectors(DUCK_NAMESPACE);

const selectEvents = (appState) => apiSelectors.selectData(appState).events || [];

const leagueSelectors = {
    ...apiSelectors,
    selectEvents,
};

export default leagueSelectors;
