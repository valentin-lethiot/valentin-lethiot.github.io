import store from '../../index'

const SECONDS_LIMIT = 60;
const MINUTES_LIMIT = 30;
let stopwatchInterval = null;

function startStopwatch() {
    if (!getIsRunning()) {
        store.dispatch('startWatch')
        stopwatchInterval = setInterval(() => {
            addSecond()
        }, 1000);
    }
}

function addSecond() {
    if (getIsRunning()) {
        store.dispatch('addSecond')
        if (getSeconds() === SECONDS_LIMIT) {
            store.dispatch('addMinute')
            store.dispatch('resetSeconds')
        }
        if (getMinutes() === MINUTES_LIMIT) {
            stopStopwatch()
        }
    }
}

function stopStopwatch() {
    if (getIsRunning()) {
        clearInterval(stopwatchInterval)
        store.dispatch('stopWatch')
    }
}

function getTime() {
    return store.getters['getTime']
}

function getIsRunning() {
    return store.getters['getIsRunning']
}

function getMinutes() {
    return store.getters['getMinutes']
}

function getSeconds() {
    return store.getters['getSeconds']
}

export default {
    startStopwatch,
    stopStopwatch,
    getTime
}
