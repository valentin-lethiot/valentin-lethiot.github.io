<template>
  <div class="matchOptions">
    <div class="matchOptions__buttons" v-if="!isMatchStarted">
      <h-button
          text="Démarrer le match"
          @click="startMatch"
      />
    </div>
    <div class="matchOptions__buttons" v-else-if="isMatchStarted && !isMatchOver">
      <h-button
          text="Start"
          :disabled="stopwatchWorking "
          @click="startTimer"
      />
      <h-button
          text="Stop"
          :disabled="!stopwatchWorking "
          @click="stopTimer"
      />
    </div>
    <div class="matchOptions__buttons" v-else-if="isMatchOver">
      FINI
    </div>
  </div>
</template>

<script>
import StopwatchUtils from "@/store/modules/StopwatchModule/StopwatchUtils";
import HButton from "../utils/HButton";
import MatchUtils from "@/store/modules/MatchModule/MatchUtils";
export default {
  name: "MatchOptions",
  components: {
    HButton
  },
  data() {
    return {
      stopwatchWorking: false
    }
  },
  methods: {
    getTime() {
      return StopwatchUtils.getTime()
    },
    startTimer() {
      StopwatchUtils.startStopwatch()
      this.stopwatchWorking = true
    },
    stopTimer() {
      StopwatchUtils.stopStopwatch()
      this.stopwatchWorking = false
    },
    startMatch() {
      MatchUtils.changeCurrentHalf()
      StopwatchUtils.startStopwatch()
      this.stopwatchWorking = true
    }
  },
  computed: {
    isMatchStarted() {
      return MatchUtils.getCurrentHalf() !== 0
    },
    isMatchOver() {
      return MatchUtils.getCurrentHalf() === 3
    }
  }
}
</script>

<style scoped>

.matchOptions {
  width: 100%;
  padding: 10px 0;
  color: white;
  font-weight: bold;
  border-left: 2px solid #D8D8F6;
  border-right: 2px solid #D8D8F6;
}

.matchOptions__buttons {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
}

</style>
