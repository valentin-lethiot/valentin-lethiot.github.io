<template>
  <div class="create-player-modal">
    <div class="create-player-modal__title-div">
      <p class="create-player-modal__title">
        Ajouter un joueur à votre équipe
      </p>
      <button @click="closeModal">
        close
      </button>
    </div>
    <div class="create-player-modal__form">
      <h-input label="Nom" v-model="player.name"/>
      <h-input label="Prenom" v-model="player.firstname"/>
      <h-input label="Numero" v-model="player.number"/>
      <h-select label="Poste" :options="getPosteSelectOptions" v-model="player.poste"/>
      <div class="create-player-modal__validateButton">
        <button @click="submit" :disabled="!isFormFilled" >Valider</button>
      </div>
    </div>
  </div>
</template>

<script>
import HInput from "../../utils/HInput";
import HSelect from "../../utils/HSelect";
export default {
  name: "CreatePlayerModal",
  components: {
    HSelect,
    HInput
  },
  props: {
    defaultPlayer: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      player: this.getPlayer()
    }
  },
  methods: {
    getPlayer() {
      if (this.defaultPlayer) {
        return {
          name: this.defaultPlayer.name,
          firstname: this.defaultPlayer.firstname,
          number: this.defaultPlayer.number,
          poste: this.defaultPlayer.poste
        }
      }

      return {
        name: '',
        firstname: '',
        number: '',
        poste: ''
      }
    },
    closeModal() {
      this.$emit('close-modal')
    },
    submit() {
      if (this.defaultPlayer) {
        this.$emit('update', this.player)
      } else {
        this.$emit('submit', this.player)
      }
      this.closeModal()
    }
  },
  computed: {
    getPosteSelectOptions() {
      return [
        {
          label: 'Ailier Gauche',
          value: 'AG'
        },
        {
          label: 'Arriere Gauche',
          value: 'ARG'
        },
        {
          label: 'Demi-centre',
          value: 'DC'
        },
        {
          label: 'Arriere Droit',
          value: 'ARD'
        },
        {
          label: 'Ailier Droit',
          value: 'AD'
        },
        {
          label: 'Pivot',
          value: 'P'
        },
        {
          label: 'Gardien',
          value: 'G'
        },
      ]
    },
    isFormFilled() {
      return this.player.name && this.player.firstname && this.player.number && this.player.poste
    },
  }
}
</script>

<style lang="scss" scoped>

.create-player-modal {
  width: 500px;
  height: 350px;
  background-color: #f8f6f6;
  border: 2px solid black;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.create-player-modal__title-div {
  background-color: lightblue;
  border-bottom: black;
  padding: 8px;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
}

.create-player-modal__title {
  font-size: x-large;
  font-weight: bold;
  color: black;
  margin: 0;
}

.create-player-modal__form {
  padding: 20px;
}

.create-player-modal__validateButton {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
