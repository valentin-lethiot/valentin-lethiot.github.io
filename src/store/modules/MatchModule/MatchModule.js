import MatchValues from "./MatchValues";

const MatchModule = {
    namespaced: true,
    state: {
        attackingSide: MatchValues.LOCAL
    },
    getters: {
        getAttackingSide: state => {
            return state.attackingSide
        }
    },
    mutations: {
        SET_ATTACKING_SIDE_EXTERN(state) {
            state.attackingSide = MatchValues.EXTERN
        },
        SET_ATTACKING_SIDE_LOCAL(state) {
            state.attackingSide = MatchValues.LOCAL
        }
    },
    actions: {
        setAttackingSideExtern({commit}){
            commit('SET_ATTACKING_SIDE_EXTERN')
        },
        setAttackingSideLocal({commit}){
            commit('SET_ATTACKING_SIDE_LOCAL')
        }
    }
}

export default MatchModule;
