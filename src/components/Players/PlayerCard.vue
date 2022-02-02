<template>
  <div class="playerCard__component">
    <div class="playerCard__deleteButtonDiv">
      <rounded-button :options="getDeleteCardOptions" size="small" @click="deletePlayer"/>
    </div>

    <div class="playerCard__content" @click="openPlayer">
      <div class="playerCard__playerImageDiv">
        <img class="playerCard__playerImage__image" :src="imageUrl"/>
      </div>
      <div class="playerCard__nameFirstname">
        <span>{{player.name}}</span>
        <span>{{player.firstname}}</span>
      </div>
      <div class="playerCard__numberPoste">
        <span>{{player.poste}}</span>
        -
        <span>{{player.number}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import RoundedButton from "../utils/RoundedButton";

export default {
  name: "PlayerCard",
  components: {
    RoundedButton
  },
  props: {
    player: {
      type: Object,
      required: true,
      validator: function (player) {
        return player.name && player.firstname && player.poste && player.number
      }
    }
  },
  data() {
    return {
      imageUrl: `https://avatars.dicebear.com/api/avataaars/${this.player.name}${this.player.firstname}.svg`
    }
  },
  computed: {
    getDeleteCardOptions() {
      return {
        backgroundColor: 'red',
        icon: 'X'
      }
    }
  },
  methods: {
    openPlayer() {
      this.$emit('open')
    },
    deletePlayer() {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="scss" scoped>
.playerCard__component {
  margin: 10px;
  width: 200px;
  height: 150px;
  position: relative;
  background-color: #769fce;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 10px;

  &:hover {
    background-color: #bbd4ff;
    cursor: pointer;
  }

  &:hover > .playerCard__deleteButtonDiv {
    display: block;
  }
}

.playerCard__deleteButtonDiv {
  position: absolute;
  top: -5px;
  right: -5px;
  display: none;
}

.playerCard__numberPoste {
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  gap: 5px;
}

.playerCard__nameFirstname {
  width: 100%;
  height: 25%;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: large;
  font-weight: bold;
}

.playerCard__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.playerCard__playerImageDiv {
  background-color: #d5d2d2;
  border-radius: 80px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.playerCard__playerImage__image {
  width: 50px;
  height: 50px;
}
</style>
