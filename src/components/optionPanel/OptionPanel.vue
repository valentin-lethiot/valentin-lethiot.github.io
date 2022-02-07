<template>
  <div class="optionPanel">
      <team-options side="LOCAL" class="optionPanel__localSide"/>
      <match-options class="optionPanel__matchOptions"/>
      <team-options side="EXTERN" class="optionPanel__externSide"/>
  </div>
</template>

<script>
import TeamOptions from "./TeamOptions";
import MatchOptions from "./MatchOptions";
export default {
  name: "OptionPanel",
  components: {
    MatchOptions,
    TeamOptions
  },
}
</script>

<style lang="scss" scoped>

.optionPanel {
  width: 100%;
  height: 100%;
  display: flex;
  border-top: 2px solid #D8D8F6;
  box-sizing: border-box;
}

.optionPanel__localSide {
  width: 45%;
  height: 100%;
}

.optionPanel__matchOptions {
  width: 10%;
}

.optionPanel__externSide {
  width: 45%;
  height: 100%;
}

</style>
