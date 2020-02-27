// import isomorphicFetch from "isomorphic-fetch";

function parseStatus(status, res) {
    return new Promise((resolve, reject) => {
        if (status >= 200 && status < 300) {
            res.then((response) => resolve(response));
        } else {
            // TODO: look into rejecting error
            // eslint-disable-next-line prefer-promise-reject-errors
            res.then((response) => reject({ status, response }));
        }
    });
}

function requestHeaders() {
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
}

export default (url, method, body) => {
    const options = {
        method,
        headers: requestHeaders(),
        body: method !== 'GET' ? JSON.stringify(body) : null,
    };

    return fetch(url, options)
        .then((res) => parseStatus(res.status, res.json()));
};
