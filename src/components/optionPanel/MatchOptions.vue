<template>
  <div class="matchOptions">
    {{ getTime() }}
    <button @click.prevent="startTimer">START</button>
    <button @click.prevent="stopTimer">STOP</button>
  </div>
</template>

<script>
import StopwatchUtils from "@/store/modules/StopwatchModule/StopwatchUtils";
export default {
  name: "MatchOptions",
  methods: {
    getTime() {
      return StopwatchUtils.getTime()
    },
    startTimer() {
      StopwatchUtils.startStopwatch()
    },
    stopTimer() {
      StopwatchUtils.stopStopwatch()
    }
  }
}
</script>

<style scoped>

.matchOptions {
  width: 100%;
  background-color: #3b5d5e;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  color: white;
  font-weight: bold;
}

</style>
