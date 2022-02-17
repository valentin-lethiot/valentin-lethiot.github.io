import store from "../../index";
import ActionsValues from "./ActionsValues";

function getPositiveActions() {
    return store.getters['actions/getPositiveActions']
}

function getNegativeActions() {
    return store.getters['actions/getNegativeActions']
}

function getActionsSide() {
    return store.getters['actions/getActionsSide']
}

function getActions() {
    if (getActionsSide() === ActionsValues.POSITIVE) {
        return getPositiveActions()
    }
    if (getActionsSide() === ActionsValues.NEGATIVE) {
        return getNegativeActions()
    }
    return []
}

function changeActionsSide() {
    const side = getActionsSide()
    if (side === ActionsValues.POSITIVE) {
        return store.dispatch('actions/setActionSideNegative')
    }
    return store.dispatch('actions/setActionSidePositive')
}

export default {
    getActions,
    changeActionsSide,
    getActionsSide
}
