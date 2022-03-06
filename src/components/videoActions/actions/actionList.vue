<template>
  <div class="actionsContainer">
    <div class="actionList">
      <HPositiveAction v-for="(action, index) of getPositiveActions" :key="index" :action="action" @click="openChoosePlayerModal(action)"/>
      </div>
    <div class="actionList">
      <HNegativeAction v-for="(action, index) of getNegativeActions" :key="index" :action="action" @click="openChoosePlayerModal(action)"/>
    </div>
    <ActionChoosePlayerModal v-if="isActionChosePlayerModalOpen" @close="closeModal" @confirm="pushActionToCsv" :action="selectedAction"/>
  </div>
</template>

<script>
import HPositiveAction from "./HPositiveAction";
import HNegativeAction from "./HNegativeAction";
import ActionChoosePlayerModal from "./ChoosePlayerModal/ActionChoosePlayerModal";
import actionsUtils from "@/store/modules/ActionsModule/ActionsUtils";
import CSVUtils from "@/store/modules/CSVModule/CSVUtils";
export default {
  name: "actionList",
  components: {
    ActionChoosePlayerModal,
    HPositiveAction,
    HNegativeAction
  },
  props: {
    actionSide: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isActionChosePlayerModalOpen: false,
      selectedAction: null
    }
  },
  computed: {
    getPositiveActions() {
      return actionsUtils.getPositiveActions()
    },
    getNegativeActions() {
      return actionsUtils.getNegativeActions()
    },
  },
  methods: {
    closeModal() {
      this.selectedAction = {}
      this.isActionChosePlayerModalOpen = false
    },
    openChoosePlayerModal(action) {
      this.selectedAction = action
      this.isActionChosePlayerModalOpen = true
    },
    pushActionToCsv(player) {
      CSVUtils.addAction({action: this.selectedAction, player})
      this.closeModal()
    }
  }
}
</script>

<style lang="scss" scoped>

.actionsContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.actionList {
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  box-sizing: border-box;
}

</style>
