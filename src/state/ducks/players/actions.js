import * as types from "./types";

export const fetchPlayers = () => ({
    type: types.FETCH_PLAYERS,
    meta: {
        async: true,
        blocking: true,
        path: "/players",
        method: "GET",
    },
});
