import { DUCK_NAMESPACE } from './types';
import reducer from './reducers';

import eventOperations from './operations';
import eventSelectors from './selectors';

export {
    eventOperations,
    eventSelectors,
};

export default { [DUCK_NAMESPACE]: reducer };
