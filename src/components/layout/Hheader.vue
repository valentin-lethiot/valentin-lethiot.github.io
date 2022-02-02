<template>
  <div class="header">
    {{ getLocalVsExternText }}
  </div>
</template>

<script>
import TeamUtils from "@/store/modules/TeamModule/TeamUtils";

export default {
  name: "Hheader",
  computed: {
    getLocalVsExternText() {
      return `${ TeamUtils.getTeamName('LOCAL') } - ${ TeamUtils.getTeamName('EXTERN') }`
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: red;
}

</style>
