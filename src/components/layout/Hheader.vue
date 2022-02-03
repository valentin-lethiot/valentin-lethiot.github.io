<template>
  <div class="header">
    <div class="header__teamDiv">
      <span>{{ getLocalVsExternText }}</span>
    </div>
    <div class="header__scoreDiv">
      <span>0 - 0</span>
    </div>
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
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid #D8D8F6;
}

.header__teamDiv {
  color: #190933;
  font-size: xx-large;
  font-weight: bold;
}

.header__scoreDiv {
  font-size: x-large;
}

</style>
