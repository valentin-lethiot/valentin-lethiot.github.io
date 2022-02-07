<template>
  <div class="actionChoosePlayerModal">
    <div class="actionChoosePlayerModal__title-div">
      <span class="actionChoosePlayerModal__title">BUT pour HBC A</span>
    </div>
    <div class="actionChoosePlayerModal__players-div">
      <action-players-list :players="getPlayers()" :selected-player-index="selectedPlayerIndex"/>
    </div>
    <div class="actionChoosePlayerModal__buttons-div">
      <h-button color="red" text="Annuler"/>
      <h-button color="green" text="Confirmer"/>
    </div>
  </div>
</template>

<script>
import HButton from "../../../utils/HButton";
import ActionPlayersList from "./ActionPlayersList";
import TeamUtils from "../../../../store/modules/TeamModule/TeamUtils";

export default {
  name: "ActionChoosePlayerModal",
  components: {
    ActionPlayersList,
    HButton
  },
  data() {
    return {
      selectedPlayerIndex: null,
      players: this.getPlayers()
    }
  },
  methods: {
    getPlayers() {
      return TeamUtils.getPlayers('LOCAL')
    }
  }
}
</script>

<style lang="scss" scoped>

.actionChoosePlayerModal {
    width: 550px;
    height: 450px;
    background-color: #f8f6f6;
    border: 2px solid black;
    border-radius: 8px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.actionChoosePlayerModal__title-div {
  width: 100%;
  height: 10%;
  border-bottom: 2px solid #D8D8F6;
  padding-left: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.actionChoosePlayerModal__title {
  color: #2c5bad;
  font-size: x-large;
  font-weight: bold;
}

.actionChoosePlayerModal__players-div {
  width: 100%;
  height: 80%;
}

.actionChoosePlayerModal__buttons-div {
  width: 100%;
  height: 10%;
  border-top: 2px solid #D8D8F6;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  box-sizing: border-box;
  padding-right: 15px;
}

.actionChoosePlayerModal__player {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  font-size: x-large;
  border-bottom: 1px solid #D8D8F6;
  box-sizing: border-box;
  font-weight: bold;

  &:hover {
    background-color: #D8D8F6;
    cursor: pointer;
  }
}
</style>
