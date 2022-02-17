<template>
  <div class="teamManagerModal">
    <div class="teamManagerModal__header">
      <tabs-list
          class="teamManagerModal__header__tabsList"
          :tabs="tabs"
          @tabChanged="updateOpenTab"
      />
      <rounded-button
          class="teamManagerModal__header__closeButton"
          size="medium"
          :options="{icon: 'cancel', backgroundColor: 'gray'}"
          @click="closeModal"
      />
    </div>
    <team-manager v-if="openTab === 0" :side="side"/>
    <players-manager v-if="openTab === 1" :side="side"/>

  </div>
</template>

<script>
import PlayersManager from "./PlayersManager/PlayersManager";
import TabsList from "../utils/Tabs/TabsList";
import TeamManager from "./TeamManager/TeamManager";
import RoundedButton from "../utils/RoundedButton";
export default {
  name: "TeamModal",
  props: {
    side: {
      type: String,
      require: true
    }
  },
  components: {
    RoundedButton,
    TeamManager,
    TabsList,
    PlayersManager
  },
  data() {
    return {
      tabs: ['Mon équipe', 'Mes joueurs'],
      openTab: 0
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    updateOpenTab(index) {
      this.openTab = index
    }
  }
}
</script>

<style scoped>
.teamManagerModal {
  width: 700px;
  height: 550px;
  background-color: #f8f6f6;
  border: 2px solid black;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.teamManagerModal__header {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #3C6997;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.teamManagerModal__header__closeButton {
  margin-right: 10px;
}
</style>
