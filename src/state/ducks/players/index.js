import { DUCK_NAMESPACE } from './types';
import reducer from './reducers';

import playerOperations from './operations';
import playerSelectors from './selectors';

export {
    playerOperations,
    playerSelectors,
};

export default { [DUCK_NAMESPACE]: reducer };
