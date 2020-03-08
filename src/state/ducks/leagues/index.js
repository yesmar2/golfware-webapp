import { DUCK_NAMESPACE } from './types';
import reducer from './reducers';

import leagueOperations from './operations';
import leagueSelectors from './selectors';

export {
    leagueOperations,
    leagueSelectors,
};

export default { [DUCK_NAMESPACE]: reducer };
