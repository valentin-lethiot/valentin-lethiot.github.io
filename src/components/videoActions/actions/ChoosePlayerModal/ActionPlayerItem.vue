<template>
  <div @click="playerClicked" :class="[
      'actionPlayerItem',
      {
        'actionPlayerItem--selected' : isSelected
    }]">
    {{ formatPlayer }}
  </div>

</template>

<script>
export default {
  name: "ActionPlayerItem",
  props: {
    isSelected: {
      type: Boolean,
      default: false
    },
    player: {
      type: Object,
      required: true
    },
  },
  computed: {
    formatPlayer() {
      return `${this.player.firstname} ${this.player.name} - Numéro ${this.player.number}`
    }
  },
  methods: {
    playerClicked() {
      this.$emit('playerClicked')
    }
  }
}
</script>

<style lang="scss" scoped>
.actionPlayerItem {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  font-size: x-large;
  border-bottom: 1px solid #D8D8F6;
  box-sizing: border-box;
  font-family: sans-serif;

  &:hover {
    background-color: #D8D8F6;
    cursor: pointer;
  }
}

.actionPlayerItem--selected {
  background-color: #D8D8F6;
  border-top: 1px solid #3C6997;
  border-bottom: 1px solid #3C6997;
}
</style>
