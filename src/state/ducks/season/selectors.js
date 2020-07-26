/* eslint-disable arrow-body-style */
import { createSelector } from 'reselect';
import { buildApiSelectors } from '../../utils';
import { DUCK_NAMESPACE, PLAYER_FILTER } from './types';
import { filterPlayers } from './utils';
import { globalSelectors } from '../global';

const apiSelectors = buildApiSelectors(DUCK_NAMESPACE);

const selectEvents = (appState) => apiSelectors.selectData(appState).events;
const selectTeams = (appState) => apiSelectors.selectData(appState).teams;
const selectFilterText = (appState) => appState[DUCK_NAMESPACE][PLAYER_FILTER];

// const selectMatchupsByEventId = (appState, eventId) =>
//   selectEvents(appState).find((event) => event._id === eventId);
const selectSelectedEvent = createSelector(
    selectEvents,
    globalSelectors.selectSelectedEventId,
    (events, selectedEventId) => events.find((event) => event._id === selectedEventId),
);

const selectPlayers = createSelector(
    selectTeams,
    (teams) => teams.reduce((playersArray, team) => {
        const { players } = team;

        const playersWithTeamInfo = players.map((player) => ({
            ...player,
            teamNumber: team.number,
            teamColor: team.color,
        }));

        return [
            ...playersArray,
            ...playersWithTeamInfo,
        ];
    }, []),
);

const selectFilteredPlayers = createSelector(
    selectPlayers,
    selectFilterText,
    (players, filterText) => filterPlayers(players, filterText),
);

const selectUnmatchedPlayers = createSelector(
    selectPlayers,
    selectSelectedEvent,
    (players, selectedEvent) => {
        if (!selectedEvent) return [];

        return players
            .filter((player) => {
                return !selectedEvent.matchups.some((matchup) => {
                    return matchup.scorecards.some((scorecard) => {
                        return scorecard.scores.some(
                            (score) => score.player === player._id,
                        );
                    });
                });
            })
            .map((unmatchedPlayer) => {
                const playerMatchup = selectedEvent.matchups.find((matchup) => {
                    return matchup.teamOneNumber === unmatchedPlayer.teamNumber
                        || matchup.teamTwoNumber === unmatchedPlayer.teamNumber;
                });

                return {
                    ...unmatchedPlayer,
                    matchupId: playerMatchup._id,
                };
            });
    },
);

const selectFilteredUnmatchedPlayers = createSelector(
    selectUnmatchedPlayers,
    selectFilterText,
    (unMatchedPlayers, filterText) => filterPlayers(unMatchedPlayers, filterText),
);

const leagueSelectors = {
    ...apiSelectors,
    selectEvents,
    selectTeams,
    selectPlayers,
    selectFilteredPlayers,
    selectSelectedEvent,
    selectUnmatchedPlayers,
    selectFilteredUnmatchedPlayers,
};

export default leagueSelectors;
