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
  background-color: antiquewhite;
  display: flex;
}

.optionPanel__localSide {
  width: 45%;
  height: 100%;
  background-color: chartreuse;
}

.optionPanel__matchOptions {
  width: 10%;
}

.optionPanel__externSide {
  width: 45%;
  height: 100%;
  background-color: lightcoral;
}

</style>
