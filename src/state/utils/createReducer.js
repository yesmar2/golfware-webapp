export default ( initialState ) => ( reducerMap ) => ( state = initialState, action ) => {
    console.log("reducerMap", reducerMap);
    console.log("action", action);
    console.log("state", state);
    const reducer = reducerMap[ action.type ];
    return reducer ? reducer( state, action ) : state;
};
