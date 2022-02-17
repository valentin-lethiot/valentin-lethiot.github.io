
const stopwatchModule = {
    state: {
        isRunning: false,
        watch: {
            min: 12,
            sec: 56,
        }
    },
    getters: {
        getTime: state => {
            const seconds = state.watch.sec.toString().length > 1 ? state.watch.sec : `0${state.watch.sec}`
            const minutes = state.watch.min.toString().length > 1 ? state.watch.min : `0${state.watch.min}`
            return `${minutes} : ${seconds}`
        },
        getIsRunning: state => {
            return state.isRunning
        },
        getMinutes: state => {
            return state.watch.min
        },
        getSeconds: state => {
            return state.watch.sec
        }
    },
    mutations: {
        ADD_SECOND(state) {
            state.watch.sec++
        },
        ADD_MINUTE(state) {
            state.watch.min++
        },
        START_WATCH(state) {
            state.isRunning = true
        },
        STOP_WATCH(state) {
            state.isRunning = false
        },
        RESET_SECONDS(state) {
            state.watch.sec = 0
        }
    },
    actions: {
        addSecond({ commit }) {
            commit('ADD_SECOND')
        },
        addMinute({ commit }) {
            commit('ADD_MINUTE')
        },
        startWatch({ commit }) {
            commit('START_WATCH')
        },
        stopWatch({ commit }) {
            commit('STOP_WATCH')
        },
        resetSeconds({ commit }) {
            commit('RESET_SECONDS')
        }
    }
};

export default stopwatchModule;
