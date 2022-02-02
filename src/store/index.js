import Vue from 'vue'
import Vuex from 'vuex'
import TeamModule from "./modules/TeamModule/TeamModule";
import StopwatchModule from "./modules/StopwatchModule/StopwatchModule";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    myTeam: TeamModule,
    opponentTeam: TeamModule,
    stopwatch: StopwatchModule
  }
})
