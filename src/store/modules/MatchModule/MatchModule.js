import MatchValues from "./MatchValues";

const MatchModule = {
    namespaced: true,
    state: {
        attackingSide: MatchValues.LOCAL,
        currentVideoTimestamp: 0
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
        }
    }
}

export default MatchModule;
