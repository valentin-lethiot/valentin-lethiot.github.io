<template>
  <div class="video-action__div">
    <div class="video"/>
    <action-panel class="actionPanel"/>
  </div>
</template>

<script>
import ActionPanel from "./actions/actionPanel";
export default {
  name: "VideoAction",
  components: {ActionPanel}
}
</script>

<style lang="scss" scoped>

.video-action__div {
  width: 100%;
  height: 500px;
  display: flex;
}

.video {
  width: 50%;
  height: 100%;
  background-color: black;
}

.actionPanel {
  width: 50%;
  height: 100%;
}
</style>
