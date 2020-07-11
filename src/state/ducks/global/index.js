import { DUCK_NAMESPACE } from './types';
import reducer from './reducers';

import globalOperations from './operations';
import globalSelectors from './selectors';

export {
    globalOperations,
    globalSelectors,
};

export default { [DUCK_NAMESPACE]: reducer };
