<template>
  <div class="matchOptions">
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
</template>

<script>
import StopwatchUtils from "@/store/modules/StopwatchModule/StopwatchUtils";
import HButton from "../utils/HButton";
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
    }
  }
}
</script>

<style scoped>

.matchOptions {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  padding: 10px 0;
  color: white;
  font-weight: bold;
  border-left: 2px solid #D8D8F6;
  border-right: 2px solid #D8D8F6;
}

</style>
