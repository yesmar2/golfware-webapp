import { fetch } from '../utils';

const baseUrl = typeof document === 'undefined' ? 'http://localhost:3000/api' : '/api';

const apiService = () => (next) => async (action) => {
    if (!action.meta || !action.meta.async) {
        return next(action);
    }

    const { path, method = 'GET', body } = action.meta;

    if (!path) {
        throw new Error(`'path' not specified for async action ${action.type}`);
    }

    const url = `${baseUrl}${path}`;
    let fetchError;

    try {
        next({ type: `${action.type}_START` });

        const response = await fetch(url, method, body);

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
