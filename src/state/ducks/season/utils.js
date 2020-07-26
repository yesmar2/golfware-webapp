const filterPlayers = (players, filterText) => players
    .map((player) => ({
        ...player,
        fullName: `${player.firstName} ${player.lastName}`,
    }))
    .filter((player) => {
        const fullName = player.fullName.toLowerCase();
        return fullName.indexOf(filterText.toLowerCase()) !== -1;
    });

export { filterPlayers };
