import * as types from "./types";

const fetchPlayers = () => ({
    type: types.FETCH,
    meta: {
        async: true,
        blocking: true,
        path: "/players",
        method: "GET",
    },
});

const setPlayerFilter = (filterText) => ({
    type: types.FILTER,
    payload: filterText,
});

export { fetchPlayers, setPlayerFilter };
