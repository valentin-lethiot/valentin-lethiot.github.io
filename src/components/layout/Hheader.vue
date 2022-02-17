<template>
  <div class="header">
    <div class="header__timeDiv">
      <span>{{ getTime }}</span>
    </div>
    <div class="header__teamDiv">
      <span>{{ getLocalVsExternText }}</span>
    </div>
    <div class="header__scoreDiv">
      <span>{{ getScore }}</span>
    </div>
  </div>
</template>

<script>
import TeamUtils from "@/store/modules/TeamModule/TeamUtils";
import StopwatchUtils from "@/store/modules/StopwatchModule/StopwatchUtils";
import MatchValues from "../../store/modules/MatchModule/MatchValues";
import CSVUtils from "../../store/modules/CSVModule/CSVUtils";

export default {
  name: "Hheader",
  computed: {
    getLocalVsExternText() {
      return `${ TeamUtils.getTeamName(MatchValues.LOCAL) } - ${ TeamUtils.getTeamName(MatchValues.EXTERN) }`
    },
    getTime() {
      return StopwatchUtils.getTime()
    },
    getScore() {
      return CSVUtils.getScore()
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid #D8D8F6;
}

.header__timeDiv {
  font-size: xx-large;
  font-weight: bold;
  color: #DB5461;
}

.header__teamDiv {
  color: #3C6997;
  font-size: x-large;
  font-family: sans-serif;
  font-weight: bold;
}

.header__scoreDiv {
  font-size: xx-large;
  font-weight: bold;
  color: #DB5461;
}

</style>
