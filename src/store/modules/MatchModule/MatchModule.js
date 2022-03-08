import MatchValues from "./MatchValues";

const MatchModule = {
    namespaced: true,
    state: {
        attackingSide: MatchValues.LOCAL,
        currentVideoTimestamp: 0,
        currentHalf: 0,
    },
    getters: {
        getAttackingSide: state => {
            return state.attackingSide
        },
        getDefendingSide: state => {
            if (state.attackingSide === MatchValues.EXTERN) {
                return MatchValues.LOCAL
            }
            return MatchValues.EXTERN
        },
        getCurrentVideoTimestamp: state => {
            return state.currentVideoTimestamp
        },
        getCurrentHalf: state => {
            return state.currentHalf
        }
    },
    mutations: {
        SET_ATTACKING_SIDE_EXTERN(state) {
            state.attackingSide = MatchValues.EXTERN
        },
        SET_ATTACKING_SIDE_LOCAL(state) {
            state.attackingSide = MatchValues.LOCAL
        },
        UPDATE_CURRENT_VIDEO_TIMESTAMP(state, timestamp) {
            state.currentVideoTimestamp = timestamp
        },
        INCREMENT_CURRENT_HALF(state) {
            state.currentHalf += 1
        }
    },
    actions: {
        setAttackingSideExtern({commit}){
            commit('SET_ATTACKING_SIDE_EXTERN')
        },
        setAttackingSideLocal({commit}){
            commit('SET_ATTACKING_SIDE_LOCAL')
        },
        updateCurrentVideoTimestamp({commit}, timestamp){
            commit('UPDATE_CURRENT_VIDEO_TIMESTAMP', timestamp)
        },
        incrementCurrentHalf({commit}) {
            commit('INCREMENT_CURRENT_HALF')
        }
    }
}

export default MatchModule;
