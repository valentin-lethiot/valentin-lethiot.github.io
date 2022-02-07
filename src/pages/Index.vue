<template>
  <div id="app" class="app">
    <Hheader class="index__header"/>
    <VideoAction class="index__videoAction"/>
    <OptionPanel class="index__optionPanel"/>
  </div>
</template>

<script>

import Hheader from "../components/layout/Hheader";
import VideoAction from "../components/videoActions/VideoAction";
import OptionPanel from "../components/optionPanel/OptionPanel";
export default {
  name: 'Index',
  components: {
    OptionPanel,
    VideoAction,
    Hheader
  },
  data (){
    return {
      myTeam: {
        name: '',
        players: []
      }
    }
  }
  /*
  green: 74b14d
  blue: 3C6997
  darkPurple: 190933
  red: DB5461
  gray: D8D8F6
   */
}
</script>

<style lang="scss" scoped>
.app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}

.index__header {
  width: 100%;
  height: 15%;
}

.index__videoAction {
  width: 100%;
  height: 70%;
}

.index__optionPanel {
  width: 100%;
  height: 15%;
}
</style>
