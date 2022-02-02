
const teamModule = {
    namespaced: true,
    state: () => ({
        teamName: 'HBC Chat',
        players: [
            {firstname: 'Valentin', name: 'Lethiot', poste: 'Pivot', number: 9},
            {firstname: 'Amelia', name: 'Tripicchio', poste: 'Gardien', number: 12},
            {firstname: 'Valentin', name: 'Lethiot', poste: 'Pivot', number: 9},
            {firstname: 'Amelia', name: 'Tripicchio', poste: 'Gardien', number: 12},
            {firstname: 'Valentin', name: 'Lethiot', poste: 'Pivot', number: 9},
            {firstname: 'Valentin', name: 'Lethiot', poste: 'Pivot', number: 9},
            {firstname: 'Amelia', name: 'Tripicchio', poste: 'Gardien', number: 12},
            {firstname: 'Valentin', name: 'Lethiot', poste: 'Pivot', number: 9},
            {firstname: 'Amelia', name: 'Tripicchio', poste: 'Gardien', number: 12},
            {firstname: 'Valentin', name: 'Lethiot', poste: 'Pivot', number: 9},
            {firstname: 'Amelia', name: 'Tripicchio', poste: 'Gardien', number: 12},
            {firstname: 'Valentin', name: 'Lethiot', poste: 'Pivot', number: 9},
            {firstname: 'Amelia', name: 'Tripicchio', poste: 'Gardien', number: 12},
            {firstname: 'Valentin', name: 'Lethiot', poste: 'Pivot', number: 9},
        ]
    }),
    getters: {
        getTeamName: state => {
            return state.teamName
        },
        getPlayers: state => {
            return state.players
        }
    },
    mutations: {
        ADD_PLAYER(state, player) {
            state.players.push(player)
        },
        UPDATE_PLAYER(state, playerIndex) {
            state.players.splice(playerIndex.index, 1, playerIndex.player)
        },
        DELETE_PLAYER(state, index) {
            state.players.splice(index, 1)
        },
        UPDATE_TEAM_NAME(state, newTeamName) {
            state.teamName = newTeamName
        }
    },
    actions: {
        addPlayer({ commit }, player) {
            commit('ADD_PLAYER', player)
        },
        updatePlayer({ commit }, playerIndex) {
            commit('UPDATE_PLAYER', playerIndex)
        },
        deletePlayer({ commit }, index) {
            commit('DELETE_PLAYER', index)
        },
        updateTeamName({ commit }, teamName) {
            commit('UPDATE_TEAM_NAME', teamName)
        }
    },
}

export default teamModule;
