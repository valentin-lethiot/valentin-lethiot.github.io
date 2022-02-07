
const MatchModule = {
    namespaced: true,
    state: {
        attackingSide: "LOCAL"
    },
    getters: {
        getAttackingSide: state => {
            return state.attackingSide
        }
    }
}

export default MatchModule;
