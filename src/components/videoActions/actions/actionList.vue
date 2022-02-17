<template>
  <div class="actionList">
    <HAction v-for="(action, index) of getCurrentActions" :key="index" :action="action" @click="openChoosePlayerModal(action)"/>
    <ActionChoosePlayerModal v-if="isActionChosePlayerModalOpen" @close="closeModal" @confirm="pushActionToCsv" :action="selectedAction"/>
  </div>
</template>

<script>
import HAction from "./HAction";
import ActionChoosePlayerModal from "./ChoosePlayerModal/ActionChoosePlayerModal";
import actionsUtils from "@/store/modules/ActionsModule/ActionsUtils";
import CSVUtils from "../../../store/modules/CSVModule/CSVUtils";
export default {
  name: "actionList",
  components: {ActionChoosePlayerModal, HAction},
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
    getCurrentActions() {
      return actionsUtils.getActions(this.actionSide)
    }
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

.actionList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

</style>
