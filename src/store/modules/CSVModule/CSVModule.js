
const CSVModule = {
    namespaced: true,
    state: {
        actions: []
    },
    getters: {
        getActions: state => {
            return state.actions
        },
    },
    mutations: {
        ADD_ACTION(state, action) {
            state.actions.push(action)
        },
    },
    actions: {
        addAction({ commit }, action) {
            commit('ADD_ACTION', action)
        }
    }
};

export default CSVModule;
