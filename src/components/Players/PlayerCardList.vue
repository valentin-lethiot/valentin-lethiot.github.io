<template>
  <div class="playerCardList">
    <player-card
        v-for="(player, index) of players"
        :key="index"
        :player="player"
        @open="openPlayer(index)"
        @delete="deletePlayer(index)"
    />
  </div>
</template>

<script>
import PlayerCard from "./PlayerCard";
export default {
  name: "PlayerCardList",
  components: {PlayerCard},
  props: {
    players: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    openPlayer(index) {
      this.$emit('open', index)
    },
    deletePlayer(index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.playerCardList {
  overflow-y: scroll;
  width: calc(100% - 40px);;
  height: calc(100% - 30px);
  display: flex;
  flex-wrap: wrap;
}
</style>
