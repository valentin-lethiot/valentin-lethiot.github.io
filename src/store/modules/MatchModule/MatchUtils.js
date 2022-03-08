import store from "../../index";
import MatchValues from "./MatchValues";

function getAttackingSide() {
    return store.getters['match/getAttackingSide']
}

function getDefendingSide() {
    return store.getters['match/getDefendingSide']
}

function changeAttackingSide() {
    if (isAttackingSideLocal()) {
        return store.dispatch('match/setAttackingSideExtern')
    }
    return store.dispatch('match/setAttackingSideLocal')
}

function isAttackingSideLocal() {
    return getAttackingSide() === MatchValues.LOCAL
}

function isAttackingSideExtern() {
    return getAttackingSide() === MatchValues.EXTERN
}

function isLocalValue(value) {
    return value === MatchValues.LOCAL
}

function isExternValue(value) {
    return value === MatchValues.EXTERN
}

function updateCurrentVideoTimestamp(value) {
    return store.dispatch('match/updateCurrentVideoTimestamp', value)
}

function changeCurrentHalf(){
    return store.dispatch('match/incrementCurrentHalf')
}

function getCurrentHalf() {
    return store.getters['match/getCurrentHalf']
}

function getCurrentVideoTimestamp() {
    return store.getters['match/getCurrentVideoTimestamp']
}

export default {
    getAttackingSide,
    getDefendingSide,
    changeAttackingSide,
    isAttackingSideExtern,
    isAttackingSideLocal,
    isLocalValue,
    isExternValue,
    updateCurrentVideoTimestamp,
    changeCurrentHalf,
    getCurrentHalf,
    getCurrentVideoTimestamp
}
