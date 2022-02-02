import store from '../../index'

function getSide(side) {
    if (side === 'LOCAL') {
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
    addPlayer,
    updatePlayer,
    deletePlayer
}
