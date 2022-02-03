<template>
  <div id="app" class="app">
    <Hheader/>
    <VideoAction/>
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
  green: BEEF9E
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
}

.index__optionPanel {
  width: 100%;
}
</style>
