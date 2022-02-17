import store from '../../index'
import MatchUtils from "../MatchModule/MatchUtils";

function getSide(side) {
    if (MatchUtils.isLocalValue(side)) {
        return 'myTeam'
    }
    return 'opponentTeam'
}

function getTeamName(side) {
    return store.getters[`${getSide(side)}/getTeamName`]
}

function updateTeamName(side, teamName) {
    store.dispatch(`${getSide(side)}/updateTeamName`, teamName)
}

function getPlayers(side) {
    return store.getters[`${getSide(side)}/getPlayers`]
}

function getPlayer(side, playerId) {
    const team = store.getters[`${getSide(side)}/getPlayers`]
    return team[playerId]
}

function addPlayer(side, player) {
    store.dispatch(`${getSide(side)}/addPlayer`, player)
}

function updatePlayer(side, index, player) {
    store.dispatch(`${getSide(side)}/updatePlayer`, {index, player})
}

function deletePlayer(side, index) {
    store.dispatch(`${getSide(side)}/deletePlayer`, index)
}

export default {
    getTeamName,
    updateTeamName,
    getPlayers,
    getPlayer,
    addPlayer,
    updatePlayer,
    deletePlayer
}
