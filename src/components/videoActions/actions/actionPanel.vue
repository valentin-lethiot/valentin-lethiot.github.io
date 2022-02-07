<template>
  <div class="actionPanel">
    <div class="actionPanel__header">
      <h-button
          @click="showPositiveAction()"
          :disabled="isPositiveActionButtonDisabled"
          text="Action positives"
          color="green"
      />
      <h-button
          @click="showNegativeAction"
          :disabled="isNegativeActionButtonDisabled"
          text="Action negatives"
          color="red"
     />
    </div>
    <div class="actionPanel__actionList">
      <ActionList :action-side="actionSide"/>
    </div>
  </div>
</template>

<script>
import ActionList from "./actionList";
import HButton from "../../utils/HButton";
export default {
  name: "actionPanel",
  components: {HButton, ActionList},
  data() {
    return {
      actionSide: "positive"
    }
  },
  methods: {
    showPositiveAction() {
      this.actionSide = 'positive'
    },
    showNegativeAction() {
      this.actionSide = 'negative'
    }
  },
  computed: {
    isNegativeActionButtonDisabled() {
      return this.actionSide === 'negative'
    },
    isPositiveActionButtonDisabled() {
      return this.actionSide === 'positive'
    }
  }
}
</script>

<style lang="scss" scoped>

.actionPanel {}

.actionPanel__header {
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #D8D8F6;
  border-left: 2px solid #D8D8F6;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  gap: 5px;
  padding: 5px;
}

.actionPanel__actionList {
  width: 100%;
  height: 100%;
  border-left: 2px solid #D8D8F6;
  padding: 15px;
  box-sizing: border-box;
}
</style>
