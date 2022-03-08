import store from '../../index'
import StopwatchUtils from "../StopwatchModule/StopwatchUtils";
import MatchUtils from "../MatchModule/MatchUtils";
import TeamUtils from "../TeamModule/TeamUtils";

const ObjectsToCsv = require('objects-to-csv');

function addAction(actionPlayer) {
    store.dispatch('csv/addAction', formatActionToCsvRow(actionPlayer))
    if (actionPlayer.action.isChangingSide) {
        MatchUtils.changeAttackingSide()
    }
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
        videoTimestamp: getCurrentVideoTimestamp(),
        time: getCurrentTime(),
        actionType: actionPlayer.action.type,
        team: getCurrentTeam(),
        player: getPlayer(actionPlayer.player, actionPlayer.action.isAttackingSide)
    }
}

function getCurrentTime() {
    return StopwatchUtils.getTime()
}

function getCurrentTeam() {
    return MatchUtils.getAttackingSide()
}

function getCurrentVideoTimestamp() {
    return MatchUtils.getCurrentVideoTimestamp()
}

function getPlayer(playerId, isAttackingSide) {
    const side = isAttackingSide ? MatchUtils.getAttackingSide() : MatchUtils.getDefendingSide()
    const player = TeamUtils.getPlayer(side, playerId)
    return `${player.name} ${player.firstname}`
}

async function exportToCsv() {
    const actions = getActions()

    const csv = new ObjectsToCsv(actions);

    await csv.toDisk('./test.csv');
    console.log(await csv.toString());
}

export default {
    addAction,
    getScore,
    exportToCsv
}
