import store from '../../index'
import StopwatchUtils from "../StopwatchModule/StopwatchUtils";
import MatchUtils from "../MatchModule/MatchUtils";
import TeamUtils from "../TeamModule/TeamUtils";

function addAction(actionPlayer) {
    store.dispatch('csv/addAction', formatActionToCsvRow(actionPlayer))
    MatchUtils.changeAttackingSide()
    console.log(JSON.stringify(store.getters["csv/getActions"], undefined, 2))
}

function getActions() {
    return store.getters["csv/getActions"]
}

function getScore() {
    let localScore = 0
    let externScore = 0
    const actions = getActions()
    actions.forEach(action => {
        if (action.actionType === 'BUT') {
            if (MatchUtils.isLocalValue(action.team)) {
                localScore++
            }
            if (MatchUtils.isExternValue(action.team)) {
                externScore++
            }
        }
    })

    return `${localScore} - ${externScore}`
}

function formatActionToCsvRow(actionPlayer) {
    return {
        time: getCurrentTime(),
        actionType: actionPlayer.action.type,
        team: getCurrentTeam(),
        player: getPlayer(actionPlayer.player)
    }
}

function getCurrentTime() {
    return StopwatchUtils.getTime()
}

function getCurrentTeam() {
    return MatchUtils.getAttackingSide()
}

function getPlayer(playerId) {
    const player = TeamUtils.getPlayer(MatchUtils.getAttackingSide(), playerId)
    return `${player.name} ${player.firstname}`
}

export default {
    addAction,
    getScore
}
