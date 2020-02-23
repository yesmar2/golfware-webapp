import * as types from './types';

function _selectData(appState) {
    return appState[types.DUCK_NAMESPACE][types.DATA_NAMESPACE];
}

function _selectStatus(appState) {
    return appState[types.DUCK_NAMESPACE].STATUS;
}

const selectPlayers = (appState) => {
    //TODO: Figure out if this is best place to create fullName
    //TODO: optimize/memoize
    const players = _selectData(appState);
    const filterText = _selectFilterText(appState);

    return players.map(player => {
        return {
            ...player,
            fullName: `${player.firstName} ${player.lastName}`
        }
    }).filter(player => { 
        const fullName = player.fullName.toLowerCase();
        return fullName.indexOf(filterText.toLowerCase()) !== -1;
    });
};

const selectSuccess = (appState) => {
    return _selectStatus(appState).success
};

const _selectFilterText = (appState) => {
    return appState[types.DUCK_NAMESPACE].FILTER;
}


export {
    selectPlayers,
    selectSuccess,
};