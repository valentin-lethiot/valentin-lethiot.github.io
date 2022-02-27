<template>
  <div class="actionPanel">
    <div class="actionPanel__header">
      <rounded-button
          size="medium"
          :options="{
            icon: 'left-right-arrows',
          }"
          @click="changeAttackingSide()"
      />
      <ToggleSwitch
          left-text="Positive"
          right-text="Negative"
          :selected-side="switchSelectedSide"
          @clickLeft="toggleLeftClick"
          @clickRight="toggleRightClick"
      />
    </div>
    <div class="actionPanel__actionList">
      <ActionList :action-side="actionSide"/>
    </div>
  </div>
</template>

<script>
import ActionList from "./actionList";
import ActionsUtils from "@/store/modules/ActionsModule/ActionsUtils";
import ActionsValues from "@/store/modules/ActionsModule/ActionsValues";
import ToggleSwitch from "../../utils/ToggleSwitch";
import RoundedButton from "../../utils/RoundedButton";
import MatchUtils from "../../../store/modules/MatchModule/MatchUtils";
import CSVUtils from "../../../store/modules/CSVModule/CSVUtils";

export default {
  name: "actionPanel",
  components: {
    RoundedButton,
    ToggleSwitch,
    ActionList
  },
  data() {
    return {
      actionSide: ActionsUtils.getActionsSide(),
      switchSelectedSide: 'left'
    }
  },
  methods: {
    changeActionsSide() {
      ActionsUtils.changeActionsSide()
      this.actionSide = ActionsUtils.getActionsSide()
    },
    toggleLeftClick() {
      this.switchSelectedSide = 'left'
      this.changeActionsSide()
    },
    toggleRightClick() {
      this.switchSelectedSide = 'right'
      this.changeActionsSide()
    },
    changeAttackingSide() {
      MatchUtils.changeAttackingSide()
    },
    async downloadCsv() {
      await CSVUtils.exportToCsv()
    }
  },
  computed: {
    isNegativeActionButtonDisabled() {
      return this.actionSide === ActionsValues.NEGATIVE
    },
    isPositiveActionButtonDisabled() {
      return this.actionSide === ActionsValues.POSITIVE
    }
  }
}
</script>

<style lang="scss" scoped>

.actionPanel {}

.actionPanel__header {
  width: 100%;
  height: 10%;
  border-bottom: 2px solid #D8D8F6;
  border-left: 2px solid #D8D8F6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  gap: 5px;
  padding: 5px 15px;
}

.actionPanel__actionList {
  width: 100%;
  height: 90%;
  border-left: 2px solid #D8D8F6;
  padding: 15px;
  box-sizing: border-box;
}
</style>
