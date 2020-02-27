import { DUCK_NAMESPACE } from './types';
import reducer from './reducers';

import authOperations from './operations';
import authSelectors from './selectors';

export {
    authOperations,
    authSelectors,
};

export default { [DUCK_NAMESPACE]: reducer };
