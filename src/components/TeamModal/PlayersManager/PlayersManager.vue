<template>
  <div class="playersManager">
    <div class="playersManager__playersList">
      <player-card-list
          :players="playersList"
          @open="openPlayer"
          @delete="deletePlayer"
      />
    </div>
    <div class="playersManager__panel">
      <rounded-button @click="isCreatePlayerModalOpen = true" :options="{icon: 'plus'}"/>
    </div>
    <create-update-player-modal
        v-if="isCreatePlayerModalOpen"
        :default-player="getSelectedPlayer"
        @close-modal="closeModal"
        @submit="addPlayer"
        @update="updatePlayer"
    />
  </div>
</template>

<script>
import CreateUpdatePlayerModal from "./CreateUpdatePlayerModal";
import RoundedButton from "../../utils/RoundedButton";
import PlayerCardList from "../../Players/PlayerCardList";
import TeamUtils from "@/store/modules/TeamModule/TeamUtils";

export default {
  name: "PlayersManager",
  components: {
    PlayerCardList,
    RoundedButton,
    CreateUpdatePlayerModal
  },
  props: {
    side: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      isCreatePlayerModalOpen: false,
      selectedPlayer: null,
      playersList: this.getPlayers()
    }
  },
  computed: {
    getSelectedPlayer() {
      return this.selectedPlayer?.player
    },
  },
  methods: {
    getPlayers() {
      return TeamUtils.getPlayers(this.side)
    },
    addPlayer(player) {
      TeamUtils.addPlayer(this.side, player)
    },
    updatePlayer(player) {
      TeamUtils.updatePlayer(this.side, this.selectedPlayer.index, player)
      this.selectedPlayer = null
    },
    deletePlayer(index) {
      TeamUtils.deletePlayer(this.side, index)
    },
    openPlayer(index) {
      this.selectedPlayer = {
        index,
        player: this.playersList[index],
      }
      this.isCreatePlayerModalOpen = true
    },
    closeModal() {
      this.isCreatePlayerModalOpen = false
      this.selectedPlayer = null
    }
  }
}
</script>

<style lang="scss" scoped>
.playersManager {
  height: calc(100% - 80px);
  width: 100%;
}

.playersManager__playersList {
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: center;
}

.playersManager__panel {
  width: 100%;
  height: 5%;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    margin-right: 15px;
  }
}

</style>
