<template>
  <div class="video-action__div">
    <div class="video__div">
      <div class="video">
        <span>LA VIDEO ICI</span>
      </div>
    </div>
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

.video__div {
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  padding: 10px;
}

.video {
  background-color: black;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: x-large;
  height: 100%;
  width: 100%;
}

.actionPanel {
  width: 50%;
  height: 100%;
}
</style>
