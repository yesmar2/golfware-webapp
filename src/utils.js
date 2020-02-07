const get = async (url, args = {}) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export {
    get
};
