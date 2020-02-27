// import { sub, isBefore } from 'date-fns';

// const baseState = {
//     working: false,
//     success: false,
//     error: undefined,
// };

// const initState = {
//     default: {
//         ...baseState,
//     },
// };

// function buildBaseDuck(namespace, sliceNamespace, idSerializer) {
//     const types = buildBaseTypes(namespace, sliceNamespace);
//     const actions = buildBaseActions(types, idSerializer);
//     const selectors = buildBaseSelectors(namespace, sliceNamespace, idSerializer);
//     const handlerMap = buildBaseHandlerMap(types);
//     const reducer = buildBaseMapReducer(handlerMap);

//     return {
//         types,
//         actions,
//         selectors,
//         handlerMap,
//         reducer,
//     };
// }

// function buildBaseTypes(namespace, sliceNamespace) {
//     if (sliceNamespace) {
//         return {
//             START_WORK: `${sliceNamespace}/${namespace}/START_WORK`,
//             END_WORK: `${sliceNamespace}/${namespace}/END_WORK`,
//             RESET: `${sliceNamespace}/${namespace}/RESET`,
//             EXPIRE: `${sliceNamespace}/${namespace}/EXPIRE`,
//         };
//     }

//     return {
//         START_WORK: `${namespace}/START_WORK`,
//         END_WORK: `${namespace}/END_WORK`,
//         RESET: `${namespace}/RESET`,
//         EXPIRE: `${namespace}/EXPIRE`,
//     };
// }

// function buildBaseActions(baseTypes, idSerializer = (id) => id) {
//     return {
//         startWork(id) {
//             id = idSerializer(id);
//             return {
//                 type: baseTypes.START_WORK,
//                 payload: id,
//             };
//         },
//         // args [id, meta, error] or [meta, error]
//         endWork(...args) {
//             if (args.length <= 2) {
//                 args.unshift(undefined);
//             }
//             let [id, meta, error] = args;
//             id = idSerializer(id);

//             return {
//                 type: baseTypes.END_WORK,
//                 error,
//                 meta,
//                 payload: id,
//             };
//         },
//         reset(id) {
//             id = idSerializer(id);

//             return {
//                 type: baseTypes.RESET,
//                 payload: id,
//             };
//         },
//         expire(id) {
//             id = idSerializer(id);

//             return {
//                 type: baseTypes.EXPIRE,
//                 payload: id,
//             };
//         },
//     };
// }

// function buildBaseHandlerMap(baseTypes) {
//     return {
//         [baseTypes.START_WORK]: _startWork,
//         [baseTypes.END_WORK]: _endWork,
//         [baseTypes.RESET]: _reset,
//         [baseTypes.EXPIRE]: _expire,
//     };
// }

// function _pickField(obj, field) {
//     return Object.entries(obj).reduce((accum, [k, v]) => ({
//         ...accum,
//         [k]: v[field],
//     }), {});
// }

// function buildBaseSelectors(namespace, sliceNamespace, idSerializer = (id) => id) {
//     function selectAllWorking(state) {
//         if (sliceNamespace) {
//             state = state[sliceNamespace];
//         }

//         return _pickField(state[namespace], 'working');
//     }

//     function selectAllError(state) {
//         if (sliceNamespace) {
//             state = state[sliceNamespace];
//         }

//         return _pickField(state[namespace], 'error');
//     }

//     function selectAllSuccess(state) {
//         if (sliceNamespace) {
//             state = state[sliceNamespace];
//         }

//         return _pickField(state[namespace], 'success');
//     }

//     function defaultSelector(state) {
//         if (sliceNamespace) {
//             state = state[sliceNamespace];
//         }

//         return state[namespace].default;
//     }

//     function idSelector(state, id = 'default') {
//         if (sliceNamespace) {
//             state = state[sliceNamespace];
//         }

//         id = typeof id === 'string'
//             ? id
//             : idSerializer(id);

//         return state[namespace][id];
//     }

//     return {
//         selectAllError,
//         selectAllSuccess,
//         selectAllWorking,
//         defaultSelector,
//         idSelector,
//         selectExpired(state, id) {
//             const subState = idSelector(state, id) || baseState;
//             return hasExpired(subState);
//         },
//         selectExpiresAt(state, id) {
//             const subState = idSelector(state, id) || baseState;
//             return subState.expiresAt;
//         },
//         selectWorking(state, id) {
//             const subState = idSelector(state, id) || baseState;
//             return subState.working;
//         },
//         selectError(state, id) {
//             const subState = idSelector(state, id) || baseState;
//             return subState.error;
//         },
//         selectSuccess(state, id) {
//             const subState = idSelector(state, id) || baseState;
//             return subState.success;
//         },
//     };
// }

// function _startWork(state, action) {
//     const {
//         payload: id = 'default',
//     } = action;

//     return {
//         ...state,
//         [id]: {
//             ...state[id] || baseState,
//             working: true,
//         },
//     };
// }

// function _endWork(state, action) {
//     const {
//         error,
//         meta,
//         payload: id = 'default',
//     } = action;

//     return {
//         ...state,
//         [id]: {
//             ...state.default,
//             success: !error,
//             error,
//             ...meta,
//             working: false,
//         },
//     };
// }

// function _reset(state, action) {
//     const {
//         payload: id = 'default',
//     } = action;

//     return {
//         ...state,
//         [id]: {
//             ...baseState,
//         },
//     };
// }

// function _expire(state, action) {
//     const {
//         payload: id = 'default',
//     } = action;

//     return {
//         ...state,
//         [id]: {
//             ...state[id] || baseState,
//             expiresAt: sub(new Date(), { seconds: 1 }),
//         },
//     };
// }

// function buildBaseMapReducer(handlers, inititalState = initState) {
//     return function mapReducer(state = inititalState, action) {
//         if (handlers.hasOwnProperty(action.type)) {
//             const handler = handlers[action.type];
//             return handler(state, action);
//         }

//         return state;
//     };
// }

// function combineDucks(...ducks) {
//     return ducks.reduce((obj, duck) => ({
//         operations: {
//             ...obj.operations || {},
//             ...duck.operations,
//         },
//         selectors: {
//             ...obj.selectors || {},
//             ...duck.selectors,
//         },
//         reducers: {
//             ...obj.reducers || {},
//             [duck.namespace]: duck.reducer,
//         },
//     }), {});
// }

// function hasExpired(meta) {
//     if (!meta.expiresAt) {
//         return false;
//     }

//     return isBefore(meta.expiresAt, new Date());
// }

// export {
//     buildBaseDuck,
//     buildBaseActions,
//     buildBaseHandlerMap,
//     buildBaseMapReducer,
//     buildBaseSelectors,
//     buildBaseTypes,
//     combineDucks,
// };
