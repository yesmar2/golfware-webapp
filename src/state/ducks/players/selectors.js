import * as types from './types';

function _selectData(appState) {
    return appState[types.DATA_NAMESPACE];
}

const getPlayers = (appState) => {
    const players = _selectData(appState);
    //TODO: Figure out if this is best place to create fullName
    return players.map(player => {
        return {
            ...player,
            fullName: `${player.firstName} ${player.lastName}`
        }
    });
};

export {
    getPlayers
};