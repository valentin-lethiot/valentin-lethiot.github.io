import ActionsValues from "./ActionsValues";

const ActionsModule = {
    namespaced: true,
    state: {
        positiveActions: ActionsValues.positiveActions,
        negativeActions: ActionsValues.negativeActions,
        actionsSide: ActionsValues.POSITIVE
    },
    getters: {
        getPositiveActions: state => {
            return state.positiveActions
        },
        getNegativeActions: state => {
            return state.negativeActions
        },
        getActionsSide: state => {
            return state.actionsSide
        }
    },
    mutations: {
        SET_ACTION_SIDE_NEGATIVE(state) {
            state.actionsSide = ActionsValues.NEGATIVE
        },
        SET_ACTION_SIDE_POSITIVE(state) {
            state.actionsSide = ActionsValues.POSITIVE
        }
    },
    actions: {
        setActionSideNegative({commit}) {
            commit('SET_ACTION_SIDE_NEGATIVE')
        },
        setActionSidePositive({commit}) {
            commit('SET_ACTION_SIDE_POSITIVE')
        }
    }
}

export default ActionsModule;
