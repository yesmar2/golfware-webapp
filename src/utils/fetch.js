function parseStatus(status, res) {
    return new Promise((resolve, reject) => {
        if (status >= 200 && status < 300) {
            res.then((response) => resolve(response));
        } else {
            // TODO: look into rejecting error
            // eslint-disable-next-line prefer-promise-reject-errors
            res.then((response) => reject({
                status,
                response,
            }));
        }
    });
}

function requestHeaders() {
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
}

export default (path, method, payload) => {
    const url = `/api${path}`;

    const options = {
        method,
        headers: requestHeaders(),
        body: method !== 'GET' ? JSON.stringify(payload) : null,
    };

    return fetch(url, options)
        .then((res) => parseStatus(res.status, res.json()));
};
