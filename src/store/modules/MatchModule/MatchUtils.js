import store from "../../index";
import MatchValues from "./MatchValues";

function getAttackingSide() {
    return store.getters['match/getAttackingSide']
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

export default {
    getAttackingSide,
    changeAttackingSide,
    isAttackingSideExtern,
    isAttackingSideLocal,
    isLocalValue,
    isExternValue
}
