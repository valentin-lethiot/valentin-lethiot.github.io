<template>
  <div class="actionPanel">
    <div class="actionPanel__header">
      <button @click="actionSide = 'positive'">Action positives</button>
      <button @click="actionSide = 'negative'">Action negatives</button>
    </div>
    <div class="actionPanel__actionList">
      <ActionList :action-side="actionSide"/>
    </div>
  </div>
</template>

<script>
import ActionList from "./actionList";
export default {
  name: "actionPanel",
  components: {ActionList},
  data() {
    return {
      actionSide: "positive"
    }
  }
}
</script>

<style lang="scss" scoped>

.actionPanel {
  border: 1px solid black;
}

.actionPanel__header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid aquamarine;
  border-radius: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.actionPanel__actionList {
  width: 100%;
  height: calc(100% - 51px);
}
</style>
