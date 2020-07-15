import { DUCK_NAMESPACE } from './types';
import reducer from './reducers';

import seasonOperations from './operations';
import seasonSelectors from './selectors';

export {
    seasonOperations,
    seasonSelectors,
};

export default { [DUCK_NAMESPACE]: reducer };
