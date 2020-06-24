import { buildApiSelectors } from '../../utils';
import { DUCK_NAMESPACE } from './types';

const apiSelectors = buildApiSelectors(DUCK_NAMESPACE);

const eventSelectors = {
    ...apiSelectors,
};

export default eventSelectors;
