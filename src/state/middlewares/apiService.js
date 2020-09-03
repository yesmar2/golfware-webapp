import fetch from '../../utils/fetch';


const apiService = () => (next) => async (action) => {
    if (!action.meta || !action.meta.async) {
        return next(action);
    }
    const { path, method = 'GET', payload } = action.meta;

    if (!path) {
        throw new Error(`'path' not specified for async action ${action.type}`);
    }

    let fetchError;

    try {
        next({ type: `${action.type}_START` });

        const response = await fetch(path, method, payload);

        next({
            type: `${action.type}_SET`,
            payload: response,
        });

        return response;
    } catch (error) {
        fetchError = error;
        return fetchError;
    } finally {
        next({
            type: `${action.type}_END`,
            error: fetchError,
            meta: action.meta,
        });
    }
};

export default apiService;
