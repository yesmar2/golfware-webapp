import * as types from './types';
import reducer from "./reducers";

import * as playerOperations from "./operations";
import * as playerSelectors from "./selectors";

export {
    playerOperations,
    playerSelectors
};

export default { [types.DUCK_NAMESPACE]: reducer };
