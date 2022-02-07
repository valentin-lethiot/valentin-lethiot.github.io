<template>
  <div class="actionPlayersList">
    <action-player-item
        v-for="(player, index) of players"
        :key="index"
        :player="player"
        :is-selected="isPlayerSelected(index)"
        @playerClicked="playerClicked(index)"
    />
  </div>
</template>

<script>
import ActionPlayerItem from "./ActionPlayerItem";
export default {
  name: "ActionPlayersList",
  components: {ActionPlayerItem},
  props: {
    players: {
      type: Array,
      default: () => []
    },
    selectedPlayerIndex: {
      type: Number,
      default: null
    }
  },
  methods: {
    isPlayerSelected(index) {
      return index === this.selectedPlayerIndex
    },
    playerClicked(index) {
      this.selectedPlayerIndex = index
      this.$emit('playerClicked', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.actionPlayersList {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>
